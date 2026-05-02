import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM "Education" ORDER BY "createdAt" DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching education:', error);
    return NextResponse.json({ error: 'Failed to fetch education' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    
    const result = await query(
      `INSERT INTO "Education" (id, degree, university, date, details, "imageUrl") 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [id, data.degree, data.university, data.date, data.details || null, data.imageUrl || null]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating education:', error);
    return NextResponse.json({ error: 'Failed to create education' }, { status: 500 });
  }
}
