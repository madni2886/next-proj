import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET() {
  await dbConnect();

  const stats = await User.aggregate([
    {
      $group: {
        _id: {
          $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
        },
        count: { $sum: 1 },
        emails: { $push: '$email' }
      }
    },
    { $sort: { _id: 1 } }
  ]);

  return NextResponse.json({
    signupsByMonth: stats.map(item => ({
      month: item._id,
      count: item.count,
      emails: item.emails,
    }))
  });
}
