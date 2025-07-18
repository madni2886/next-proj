'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const [hasMounted, setHasMounted] = useState(false);
  const [user, setUser] = useState('');
  const [initials, setInitials] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Read from localStorage inside useEffect so it updates dynamically
  useEffect(() => {
    setHasMounted(true);

    const storedUser = localStorage.getItem('user');
    setUser(storedUser);

    if (storedUser) {
      try {
        const nameParts = storedUser.trim().split(' ');
        const first = nameParts[0]?.charAt(0) || '';
        const second = nameParts[1]?.charAt(0) || '';
        setInitials((first + second).toUpperCase());
      } catch {
        setInitials('');
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    // ✅ Optional: Listen for login/logout events if other components update storage
    const handleAuthChange = () => {
      const updatedUser = localStorage.getItem('user');
      setUser(updatedUser);
      if (updatedUser) {
        const nameParts = updatedUser.trim().split(' ');
        const first = nameParts[0]?.charAt(0) || '';
        const second = nameParts[1]?.charAt(0) || '';
        setInitials((first + second).toUpperCase());
      } else {
        setInitials('');
      }
    };

    window.addEventListener('authChanged', handleAuthChange);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('authChanged', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('authChanged')); // 🔄 trigger reactivity
    router.push('/login');
  };

  if (!hasMounted || pathname === '/login' || pathname === '/signup') return null;

  return (
    <nav className="w-full bg-gray-800 text-white flex justify-between items-center px-6 py-4 shadow">
      {/* Logo and App Name */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/cruel-war-scenes-digital-painting.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold">My App</span>
      </Link>

      {/* Auth Buttons */}
      <div className="relative flex items-center gap-4">
        {user ? (
          <>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              {initials}
            </div>

            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-14 right-0 bg-white text-black rounded shadow-md w-40 z-10"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => router.push('/login')}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
