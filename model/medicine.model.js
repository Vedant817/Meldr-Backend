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
    imageUrl: {
        type: mongoose.SchemaType.Url,
        validate: {
            validator: function (v){
                return /^https:\/\//.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    }
}
);

export const Medicine = mongoose.model('Medicine', medicineSchema);