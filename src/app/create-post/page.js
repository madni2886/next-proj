// src/app/create-post/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Ensure userId is stored on login

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, userId }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      alert('Post created successfully!');
      router.push('/posts'); // or any redirect path
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded placeholder-gray-500"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 rounded placeholder-gray-500"
          placeholder="Post Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
