import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  
  const { email, password, userName, firstName, lastName, phone, address, city, state, zipCode, country, dateOfBirth } = await req.json();

  const existing = await User.findOne({ email });
  if (existing) return Response.json({ msg: 'User already exists' }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashed, userName, firstName, lastName, phone, address, city, state, zipCode, country, dateOfBirth });

  return Response.json({ msg: 'User created' }, { status: 201 });
}
