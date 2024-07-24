import { Medicine } from "../model/medicine.model.js";

const getMedicine = async (req, res) => {
    const medicines = await Medicine.find();
    
    res.status(200).json({
        message: 'Data fetched successfully',
        data: medicines
    });
}

export default getMedicine;