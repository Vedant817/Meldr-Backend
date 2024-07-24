import { Router } from "express";
import createMedicine from './controllers/createMedicine.js'
import getMedicine from "./controllers/getMedicines.js";
import updateMedicine from "./controllers/updateMedicine.js";
import deleteMedicine from "./controllers/deleteMedicine.js";

const router = Router();

router.route('/create').post(createMedicine);
router.route('/medicine').get(getMedicine);
router.route('/update/:name').put(updateMedicine);
router.route('/delete/:name').delete(deleteMedicine);

export default router;