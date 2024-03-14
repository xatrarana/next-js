import { NextRequest, NextResponse } from "next/server";
import db from '@/lib/prisma'
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
const MAX_FILE_SIZE_BYTES = 3 * 1024 * 1024; // 3 MB
const date = new Date();

export async function POST(request: NextRequest) {
    
    const data = await request.formData();
    const file: File | null = data.get('cover') as unknown as File;
    if (!data) {
        return NextResponse.json('invalid operation')
    }
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();
    const type = data.get('type')?.toString();
    if (!title || !description || !type || !file) {
        return NextResponse.json({ success: false, error: "Invalid form data" });
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json({ success: false, error: "File size exceeds maximum allowed size" });
    }
    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const year = date.getFullYear().toString();
        const timestamp = date.getTime().toString();

        const directoryPath = join(process.cwd(), 'public', 'services', year);

        if (!existsSync(directoryPath)) {
            mkdirSync(directoryPath, { recursive: true });
        }
        const filename = `${timestamp}_${file.name}`
        const filePath = join(directoryPath, filename);
        await writeFile(filePath, buffer);

        const service = await db.service.create({
            data: {
                title,
                cover: filename,
                description,
                type,
            }
        });
        
        return NextResponse.json({ success: true, service },{status:201});
    } catch (error) {
        console.error('Error:', error);
        if (error instanceof Error)
            return NextResponse.json({ success: false, error: error.message });
    }
    
}
