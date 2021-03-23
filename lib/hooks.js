import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { postToJSON } from '../lib/firebase';
// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user, loading] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [referral, setReferral] = useState(null);
  const [maker, setMaker] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    let unsubscribe2;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
        setReferral(doc.data()?.referral);
      });
    }

    if (username) {
      const ref2 = firestore.collection('makers').doc(username);
      unsubscribe2 = ref2.onSnapshot((doc) => {
        setMaker(postToJSON(doc));
      });
    }

    return unsubscribe + unsubscribe2;
  }, [user, username]);

  return { user, username, referral, maker, loading };
}
