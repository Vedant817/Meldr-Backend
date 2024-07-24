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
        const { price, discountAvailable, quantityAbove, manufacturer } = req.query;

        if (price) {
            const abovePrice = await Medicine.find({ price: { $gte: price } });
            const belowPrice = await Medicine.find({ price: { $lt: price } });

            return res.status(200).json({
                title1: 'Above Price',
                abovePrice: abovePrice,
                title2: 'Below Price',
                belowPrice: belowPrice
            });
        }

        if(discountAvailable){
            const discountedMedicines = await Medicine.find({discountPrice: {$ne: null}});
            return res.status(200).json({
                discountedMedicines
            });
        }

        if(quantityAbove){
            const medicines = await Medicine.find({quantity: {$gte: quantityAbove}});
            return res.status(200).json({
                medicines
            });
        }

        if(manufacturer){
            const medicines = await Medicine.find({manufacturer});
            return res.status(200).json({
                medicines
            });
        }
    } catch (error) {
        console.log('Error occurred while filtering medicine', error);
    }
}