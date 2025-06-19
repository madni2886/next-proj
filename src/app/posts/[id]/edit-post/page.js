'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [post, setPost] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setPost({ title: data.title, content: data.content });
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });

    if (res.ok) {
      alert('Post updated!');
      router.push('/posts');
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <form onSubmit={handleUpdate} className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        className="border p-2 w-full mb-4"
        placeholder="Title"
      />
      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        className="border p-2 w-full mb-4"
        rows="5"
        placeholder="Content"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
}
