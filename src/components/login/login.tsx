'use client';

import Link from 'next/link';
import { Form } from '@/components/login/form';
import { SubmitButton } from '@/components/login/submit-button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Login() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleLogin(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      setLoading(true);
      setError(null);

      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');

    } catch (err: any) {
      setError(err.message || 'Failed to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex px-16 justify-center mb-[150px]">
      <div className="max-w-sm w-full p-6 rounded-lg shadow-lg">
        <h3 className="text-center text-lg font-medium mb-2">Sign In</h3>
        <p className="text-center text-sm text-gray-500 mb-4">
          Use your email and password to sign in
        </p>

        <Form action={handleLogin}>
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

          {loading && <p className="text-sm text-blue-500 mb-4">Signing in...</p>}

          <SubmitButton>
            {loading ? 'Signing in...' : 'Sign in'}
          </SubmitButton>
        </Form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-medium text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}