'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  // Hide navbar on login and signup pages
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <nav className="w-full bg-gray-800 text-white flex justify-between items-center px-6 py-4 shadow">
      <Link href="/" className="text-xl font-bold">My App</Link>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push('/login')}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition"
        >
          Login
        </button>
      )}
    </nav>
  );
}
