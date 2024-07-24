import mongoose, { Schema } from "mongoose";

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
}
);

export const Medicine = mongoose.model('Medicine', medicineSchema);