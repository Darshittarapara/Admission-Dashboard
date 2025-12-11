/* eslint-disable @typescript-eslint/no-explicit-any */
import { createConnection } from "@/libs/db/db";
import { Program } from "@/libs/db/ProgramsModel";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    try {
        await createConnection();
        const status =  req.nextUrl.searchParams.get('status');
    
        const data = await Program.find({ status });

        return NextResponse.json({
            data,
            status: true
        })
    } catch (error: any) {
        return NextResponse.json({
            data: [],
            error: error.message,
            status: false
        })
    }
}