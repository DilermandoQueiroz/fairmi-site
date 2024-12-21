'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import SubTitle from '@/components/SubTitle';
import { withAuth } from '@/lib/firebase/withAuth';
import { auth } from '@/lib/firebase/firebase';

function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redireciona para a página de login após logout
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <>
      <SubTitle title="Protected page" />
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </>
  );
}

export default withAuth(Home);