import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';

import { auth } from '../lib/firebase';

export default function Logout() {
  const router = useRouter();

  const logout = async (e) => {
    e.preventDefault();
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
    await magic.user.logout();
    await auth.signOut();
    router.push('/');
  };
  return (
    <>
      <a
        onClick={logout}
        className='block text-center cursor-pointer hover:text-gray-300 text-gray-400 pt-6'>
        <div className='text-md'>
          <span className='hover:underline'>Logout</span>
        </div>
      </a>
    </>
  );
}
