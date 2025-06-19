// src/app/api/posts/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  const { title, content, userId } = body;
    console.log('Received body:', body);
    if (!body){
    return NextResponse.json({ error: 'Request body is empty' }, { status: 400 });
    }
  if (!title || !userId) {
    return NextResponse.json({ error: 'Missing title or userId' }, { status: 400 });
  }

  const post = await Post.create({ title, content, userId });

  return NextResponse.json(post);
}
export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const [posts, total] = await Promise.all([
      Post.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Post.countDocuments()
    ]);

    return new Response(
      JSON.stringify({ posts, total, page, pages: Math.ceil(total / limit) }),
      { status: 200 }
    );
  } catch (error) {
    console.error('GET /api/posts error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), { status: 500 });
  }
}


