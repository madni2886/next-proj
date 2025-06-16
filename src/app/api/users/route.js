import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find().skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
      User.countDocuments()
    ]);

    return Response.json({
      users,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error('User fetch failed:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
  }
}
