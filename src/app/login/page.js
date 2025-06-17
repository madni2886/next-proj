'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user._id); // adjust based on your auth response
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full my-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full my-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2  cursor-pointer hover:bg-green-700">Login</button>
<p className="text-sm mt-4 text-gray-600 text-center">
  Don&apos;t have an account?{' '}
  <Link href="/signup" className="text-blue-600 hover:underline">
    Sign Up
  </Link>
</p>


    </form>
  );
}
