import { Medicine } from "../model/medicine.model.js";

export const searchMedicine = async (req, res) => {
    try {
        const { name } = req.params;
        const medicine = await Medicine.find({ name })
        if (medicine.length === 0) {
            return res.status(404).json({
                message: 'Medicine not found'
            });
        }

        return res.status(200).json({
            medicine
        });
    } catch (error) {
        console.log('Error occurred while searching for medicine', error);
    }
}

export const filterMedicine = async (req, res) => {
    try {
        const { priceAbove, priceBelow, discountAvailable, quantityAbove, manufacturer } = req.query;

        let query = {};

        if (priceAbove || priceBelow) {
            query.price = {};
            if (priceAbove) query.price.$gte = Number(priceAbove);
            if (priceBelow) query.price.$lt = Number(priceBelow);
        }

        if (discountAvailable === 'true') {
            query.discountPrice = { $ne: null };
        }

        if (quantityAbove) {
            query.quantity = { $gte: Number(quantityAbove) };
        }

        if (manufacturer) {
            query.manufacturer = { $regex: new RegExp(manufacturer, 'i') };
        }

        const medicines = await Medicine.find(query);

        res.status(200).json({
            count: medicines.length,
            medicines: medicines
        });
    } catch (error) {
        console.error('Error occurred while filtering medicine', error);
        res.status(500).json({ message: 'An error occurred while filtering medicines' });
    }
};

export const sortMedicine = async (req, res) => {
    try {
        const { sortBy, order } = req.query;

        let sortOption = {};

        if (!['name', 'price', 'quantity'].includes(sortBy)) {
            return res.status(400).json({ message: 'Invalid sort field. Use name, price, or quantity.' });
        }

        sortOption[sortBy] = order === 'desc' ? -1 : 1;
        const medicines = await Medicine.find().sort(sortOption);

        res.status(200).json({
            count: medicines.length,
            medicines: medicines
        });
    } catch (error) {
        console.error('Error occurred while sorting medicines:', error);
        res.status(500).json({ message: 'An error occurred while sorting medicines' });
    }
};