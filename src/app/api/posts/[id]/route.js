import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';
export async function GET(req, { params }) {
  await dbConnect();
  const post = await Post.findById(params.id).lean();
  if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req, { params }) {
  await dbConnect();
  const { title, content } = await req.json();

  const updatedPost = await Post.findByIdAndUpdate(
    params.id,
    { title, content },
    { new: true }
  );

  if (!updatedPost) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Post updated', post: updatedPost });
}
export async function DELETE(req, { params }) {
  await dbConnect();
  const deletedPost = await Post.findByIdAndDelete(params.id);

  if (!deletedPost) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Post deleted' });
}