'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UserStatsPage from '../user-stats/page';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
  }, []);

  return( <>
  <div className="p-6 text-xl">Welcome to your Dashboard 🎉</div>
  <div className=''>
    <UserStatsPage/>
  </div>
  <a href="/create-post" className="text-blue-600 hover:underline p-4 block bg-gray-100 rounded-md shadow-md transition hover:bg-gray-200 center align-middle">
    Create a New Post
  </a>
  <a href="/users" className="text-blue-600 hover:underline p-4 block bg-gray-100 rounded-md shadow-md transition hover:bg-gray-200 center align-middle">
    View All Users
  </a>

  <a href="/posts" className="text-blue-600 hover:underline p-4 block bg-gray-100 rounded-md shadow-md transition hover:bg-gray-200 center align-middle">
    View All Posts
  </a>
</>
);
}
