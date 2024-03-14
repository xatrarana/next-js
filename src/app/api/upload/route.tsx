import { writeFile } from 'fs/promises';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const MAX_FILE_SIZE_BYTES = 3 * 1024 * 1024; // 3 MB

export async function POST(request: NextRequest) {
  const data = await request.formData();
  
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, error: "No file provided" });
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json({ success: false, error: "File size exceeds maximum allowed size" });
  }
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const date = new Date();
    const year = date.getFullYear().toString();
    const timestamp = date.getTime().toString();

    // Adjust the path to create the directory in the root directory
    const directoryPath = join(process.cwd(), 'public', 'images', year);
    console.log(directoryPath)

    if (!existsSync(directoryPath)) {
      mkdirSync(directoryPath, { recursive: true });
    }

    const filePath = join(directoryPath, `${timestamp}_${file.name}`);
    await writeFile(filePath, buffer);

    console.log(`File saved at: ${filePath}`);

    return NextResponse.json({ success: true, filePath });
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof Error)
      return NextResponse.json({ success: false, error: error.message });
  }
}
