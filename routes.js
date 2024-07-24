import { Router } from "express";
import createMedicine from './controllers/createMedicine.js'
import getMedicine from "./controllers/getMedicines.js";
import updateMedicine from "./controllers/updateMedicine.js";
import deleteMedicine from "./controllers/deleteMedicine.js";
import { filterMedicine, searchMedicine, sortMedicine } from "./controllers/queryMedicine.js";
import { cache, clearCache } from "./middleware/redisCache.js";

const router = Router();

//? Cache duration in seconds
const CACHE_SHORT = 60;  // 1 minute
const CACHE_MEDIUM = 300;  // 5 minutes
const CACHE_LONG = 3600; // 1 hour

router.route('/create').post(clearCache('/api/medicine/all'), createMedicine);
router.route('/all').get(cache(CACHE_MEDIUM), getMedicine);
router.route('/update/:name').put(clearCache('/api/medicine/all'), updateMedicine);
router.route('/delete/:name').delete(clearCache('/api/medicine/all'), deleteMedicine);
router.route('/search/:name').get(cache(CACHE_SHORT), searchMedicine);
router.route('/filter').get(cache(CACHE_SHORT), filterMedicine);
router.route('/sort').get(cache(CACHE_SHORT), sortMedicine);

export default router;