import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM "Bio" WHERE id = 1');
    return NextResponse.json(result.rows[0] || { content: '' });
  } catch (error) {
    console.error('Error fetching bio:', error);
    return NextResponse.json({ error: 'Failed to fetch bio' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const result = await query(
      `INSERT INTO "Bio" (id, content, "updatedAt") 
       VALUES (1, $1, CURRENT_TIMESTAMP) 
       ON CONFLICT (id) DO UPDATE SET content = $1, "updatedAt" = CURRENT_TIMESTAMP 
       RETURNING *`,
      [data.content]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating bio:', error);
    return NextResponse.json({ error: 'Failed to update bio' }, { status: 500 });
  }
}
