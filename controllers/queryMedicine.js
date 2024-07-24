import { Medicine } from "../model/medicine.model.js";

export const searchMedicine = async (req, res) => {
    try {
        const { name } = req.params;
        const medicine = await Medicine.find({name})
        if(medicine.length === 0){
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