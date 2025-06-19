// src/app/api/projects/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';

export async function POST(req) {
  await dbConnect();
  const { name, description, ownerId } = await req.json();

  const newProject = await Project.create({ name, description, owner: ownerId });
  return NextResponse.json(newProject);
}
