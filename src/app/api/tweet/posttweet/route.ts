import { connects } from "@/dbConfig/dbConfig";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    const reqData = request.json();
    connects();
}