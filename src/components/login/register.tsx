'use client';

import Link from 'next/link';
import { Form } from '@/components/login/form';
import { SubmitButton } from '@/components/login/submit-button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null); // Para capturar erros no registro

  async function handleRegister(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      // Cria o usuário com Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login'); // Redireciona para a página de login
    } catch (err: any) {
      // Exibe erro ao usuário
      setError(err.message || 'Failed to register. Please try again.');
    }
  }

  return (
    <div className="flex px-16 justify-center mb-[150px]">
      <div className="max-w-sm w-full p-6 rounded-lg shadow-lg">
        <h3 className="text-center text-lg font-medium mb-2">Sign Up</h3>
        <p className="text-center text-sm text-gray-500 mb-4">
          Create an account using your email and password
        </p>
        {/* Formulário de registro */}
        <Form action={handleRegister}>
          {/* Mensagem de erro */}
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          {/* Botão de envio */}
          <SubmitButton>Sign Up</SubmitButton>
        </Form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}