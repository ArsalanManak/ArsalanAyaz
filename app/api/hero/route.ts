import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM "Hero" WHERE id = 1');
    return NextResponse.json(result.rows[0] || { name: '', role: '', imageUrl: '' });
  } catch (error) {
    console.error('Error fetching hero:', error);
    return NextResponse.json({ error: 'Failed to fetch hero' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const result = await query(
      `INSERT INTO "Hero" (id, name, role, "imageUrl", "updatedAt") 
       VALUES (1, $1, $2, $3, CURRENT_TIMESTAMP) 
       ON CONFLICT (id) DO UPDATE SET name = $1, role = $2, "imageUrl" = COALESCE($3, "Hero"."imageUrl"), "updatedAt" = CURRENT_TIMESTAMP 
       RETURNING *`,
      [data.name, data.role, data.imageUrl || null]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating hero:', error);
    return NextResponse.json({ error: 'Failed to update hero' }, { status: 500 });
  }
}
