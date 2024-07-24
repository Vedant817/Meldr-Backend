import { Router } from "express";
import createMedicine from './controllers/createMedicine.js'
import getMedicine from "./controllers/getMedicines.js";

const router = Router();

router.route('/create').post(createMedicine);
router.route('/medicine').get(getMedicine);

export default router;