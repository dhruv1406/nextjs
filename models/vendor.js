import mongoose, { Schema } from "mongoose";

const vendorSchema = new Schema(
    {
        name: String,
        bankNum: Number,
        bankName: String,
        address1: String,
        address2: String,
        city: String,
        country: String,
        zip: Number,
    },
    {
        timestamps: true,
    }

);

const Vendor = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);

export default Vendor;