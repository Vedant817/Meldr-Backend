import { Router } from "express";
import createMedicine from './controllers/createMedicine.js'

const router = Router();

router.route('/create').post(createMedicine);


export default router;