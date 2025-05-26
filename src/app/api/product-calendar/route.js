import { NextResponse } from 'next/server';
import connnectionToDatabase from "@/lib/mongodb";
import Product from '@/models/Product';
import AdminUser from '@/models/AdminUser';

export async function GET(request) {
  await connnectionToDatabase();

  const { searchParams } = new URL(request.url);
  const month = parseInt(searchParams.get('month'));
  const year = parseInt(searchParams.get('year'));

  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0, 23, 59, 59, 999);

  // Get daily product counts per user
  const data = await Product.aggregate([
    {
      $match: {
        createdAt: { $gte: start, $lte: end }
      }
    },
    {
      $group: {
        _id: {
          userid: '$userid',
          day: { $dayOfMonth: '$createdAt' }
        },
        count: { $sum: 1 }
      }
    }
  ]);

  // Transform: { userid -> { day: count } }
  const userDayMap = {};

  for (const entry of data) {
    const { userid, day } = entry._id;
    const count = entry.count;

    if (!userDayMap[userid]) {
      userDayMap[userid] = {};
    }
    userDayMap[userid][day] = count;
  }

  // Fetch admin users from DB
  const adminUsers = await AdminUser.find();

  // Build result
  const result = adminUsers.map((user) => {
    const dailyCounts = userDayMap[user._id.toString()] || {};
    const total = Object.values(dailyCounts).reduce((sum, val) => sum + val, 0);

    return {
      userId: user._id,
      username: user.username,
      dailyCounts,
      total
    };
  });

  return NextResponse.json(result);
}
