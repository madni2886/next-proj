'use client';

import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const limit = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`/api/users?page=${page}&limit=${limit}`);
      const data = await res.json();
      setUsers(data.users);
      setPages(data.pages);
    };

    fetchUsers();
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users </h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="border p-4 rounded-md">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.userName}</p>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
