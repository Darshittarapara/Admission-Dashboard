/* eslint-disable @typescript-eslint/no-explicit-any */
import { createConnection } from "@/libs/db/db";
import { Program } from "@/libs/db/ProgramsModel";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    try {
        await createConnection();
        const response = await Program.aggregate([
            {
                $group: {
                    _id: '$program',
                    total: {$sum: 1},
                    createdAt: {$first: '$createdAt'}
                },
               

            },
            
        ])

        return NextResponse.json({
            data:response,
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