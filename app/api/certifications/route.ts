import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM "Certification" ORDER BY "createdAt" DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return NextResponse.json({ error: 'Failed to fetch certifications' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    
    const result = await query(
      `INSERT INTO "Certification" (id, title, details, "imageUrl", link) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [id, data.title, data.details, data.imageUrl, data.link || null]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating certification:', error);
    return NextResponse.json({ error: 'Failed to create certification' }, { status: 500 });
  }
}
