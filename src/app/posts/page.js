'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts?page=${page}&limit=${limit}`);
      const data = await res.json();
      setPosts(data.posts);
      setTotalPages(data.pages);
    };

    fetchPosts();
  }, [page]);

  const handleDelete = async (id) => {
    
    if (!confirm("Are you sure you want to delete this post?")) return;

    const res = await fetch(`/api/posts/${id}`, {

      method: 'DELETE',
    });
    console.log("response",res)

    if (res.ok) {
      // Refresh posts after deletion
      setPosts(posts.filter(post => post._id !== id));
    } else {
      alert("Failed to delete post.");
    }
  };

  const handleEdit = (id) => {
    router.push(`/edit-post/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts (Page {page})</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <small className="text-gray-500">{post.authorEmail}</small>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(post._id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

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
