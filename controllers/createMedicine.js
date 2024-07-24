import { Medicine } from "../model/medicine.model.js";

const createMedicine = async (req, res) => {
    try {
        const { name, price, discountPrice, quantity, manufacturer, imageUrl } = req.body;
        //TODO: Store image in S3 bucket and get the URL.

        if (!name || !price || !quantity || !manufacturer) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newDocument = new Medicine({
            name,
            price,
            discountPrice,
            quantity,
            manufacturer,
            imageUrl
        });
        await newDocument.save();
        res.status(201).json({
            message: 'Data Saved Successfully',
            data: newDocument
        })
    } catch (error) {
        console.log('Error while creating a document', error)
    }
}

export default createMedicine;