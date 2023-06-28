import connectMongoDB from "@/libs/mongodb";
import Vendor from "@/models/vendor";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name, bankNum, bankName, address1, address2, city, country, zip} = await request.json();
    await connectMongoDB();

    await Vendor.create({name, bankNum, bankName, address1, address2, city, country, zip});
    return NextResponse.json({message: "Vendor Created"}, { status :201});
}

export async function GET(){
    await connectMongoDB();
    const vendors = await Vendor.find();
    return NextResponse.json({vendors});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Vendor.findByIdAndDelete(id);

    return NextResponse.json({message: "Topic deleted"}, {status: 200});
}