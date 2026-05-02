import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    const result = await query(
      `UPDATE "Certification" 
       SET title = $1, details = $2, "imageUrl" = $3, link = $4, "updatedAt" = CURRENT_TIMESTAMP 
       WHERE id = $5 RETURNING *`,
      [data.title, data.details, data.imageUrl, data.link || null, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Certification not found' }, { status: 404 });
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating certification:', error);
    return NextResponse.json({ error: 'Failed to update certification' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await query('DELETE FROM "Certification" WHERE id = $1', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting certification:', error);
    return NextResponse.json({ error: 'Failed to delete certification' }, { status: 500 });
  }
}
