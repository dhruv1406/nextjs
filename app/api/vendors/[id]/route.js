import connectMongoDB from "@/libs/mongodb";
import Vendor from "@/models/vendor";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newName: name, newBankNum: bankNum, newBankName: bankName, newAddress1: address1, newAddress2: address2, newCity: city, newCountry: country, newZip: zip} = await request.json();
    await connectMongoDB();
    await Vendor.findByIdAndUpdate(id, {name, bankNum, bankName, address1, address2, city, country, zip});
    return NextResponse.json({message: "Topic Updated"}, {status: 200});

}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const vendor = await Vendor.findOne({_id: id});
    return NextResponse.json({vendor}, {status: 200});
}