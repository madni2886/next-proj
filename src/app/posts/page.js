'use client';

import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5; // You can adjust this

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts?page=${page}&limit=${limit}`);
      const data = await res.json();
      setPosts(data.posts);
      setTotalPages(data.pages);
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts (Page {page})</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <small className="text-gray-500">{post.authorEmail}</small>
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="flex gap-4 mt-6">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
