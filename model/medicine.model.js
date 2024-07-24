import mongoose, { Schema } from "mongoose";
import validator from 'validator';

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
        default: null
    },
    quantity: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function (v){
                return v=== null || validator.isURL(v);
            },
            message: props => `${props.value} is not a valid URL!`
        },
        default: null
    }
}
);

export const Medicine = mongoose.model('Medicine', medicineSchema);