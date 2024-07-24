import { Medicine } from "../model/medicine.model.js";

const updateMedicine = async (req, res) => {
    try {
        const { name } = req.params;
        const updateData = req.body;
        const medicine = await Medicine.findOne({ name });
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'No data to update' });
        }

        const updatedMedicine = await Medicine.findOneAndUpdate(
            { name: name },
            { $set: updateData },
            { new: true, runValidators: true }
        )

        if (!updatedMedicine) {
            res.status(404).json({ message: 'Medicine not updated' });
        }

        res.status(200).json({
            message: 'Medicine updated successfully',
            data: updatedMedicine
        });
    } catch (error) {
        console.log('Error occurred in updateMedicine', error);
    }
}

export default updateMedicine;