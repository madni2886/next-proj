'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_details');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-semibold">No user data found.</h1>
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src={user.profilePicture || '/images/avatar-placeholder.png'}
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="mt-6 text-sm text-gray-700 space-y-1">
          <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
          <p><strong>Address:</strong> {user.address || 'N/A'}</p>
          <p><strong>City:</strong> {user.city || 'N/A'}</p>
          <p><strong>Date of Birth:</strong> {user.dateOfBirth || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
