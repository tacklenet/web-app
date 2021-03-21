import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user, loading] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [referral, setReferral] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
        setReferral(doc.data()?.referral);
      });
    }

    return unsubscribe;
  }, [user]);

  return { user, username, referral, loading };
}
