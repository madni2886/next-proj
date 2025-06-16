import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return Response.json({ msg: 'Invalid credentials' }, { status: 400 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return Response.json({ msg: 'Invalid credentials' }, { status: 400 });

  const token = jwt.sign({ userId: user._id }, "hello", { expiresIn: '1d' });

  return Response.json({ token,user }, { status: 200 });
}
