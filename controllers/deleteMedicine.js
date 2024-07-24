import { Medicine } from "../model/medicine.model.js";

const deleteMedicine = async (req, res) => {
    try {
        const {name} = req.params;
        const medicine = await Medicine({name});
        if(!medicine){
            return res.status(404).json({message: 'Medicine not found'});
        }
        const result = await Medicine.deleteOne({name});

        if(!result){
            return res.status(404).json({message: 'Medicine not deleted'});
        }

        return res.status(200).json({message: 'Medicine deleted successfully'});
    } catch (error) {
        console.log('Error occurred in deleting Medicine', error);
    }
}

export default deleteMedicine;