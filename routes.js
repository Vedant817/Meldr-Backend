import { Router } from "express";
import createMedicine from './controllers/createMedicine.js'
import getMedicine from "./controllers/getMedicines.js";
import updateMedicine from "./controllers/updateMedicine.js";
import deleteMedicine from "./controllers/deleteMedicine.js";
import { searchMedicine } from "./controllers/queryMedicine.js";

const router = Router();

router.route('/create').post(createMedicine);
router.route('/medicine').get(getMedicine);
router.route('/update/:name').put(updateMedicine);
router.route('/delete/:name').delete(deleteMedicine);
router.route('/search/:name').get(searchMedicine);

export default router;