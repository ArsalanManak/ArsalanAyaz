import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    const result = await query(
      `UPDATE "Education" 
       SET degree = $1, university = $2, date = $3, details = $4, "imageUrl" = $5, "updatedAt" = CURRENT_TIMESTAMP 
       WHERE id = $6 RETURNING *`,
      [data.degree, data.university, data.date, data.details || null, data.imageUrl || null, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Education entry not found' }, { status: 404 });
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating education:', error);
    return NextResponse.json({ error: 'Failed to update education' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await query('DELETE FROM "Education" WHERE id = $1', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting education:', error);
    return NextResponse.json({ error: 'Failed to delete education' }, { status: 500 });
  }
}
