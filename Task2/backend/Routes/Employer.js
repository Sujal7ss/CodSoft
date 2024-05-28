import express from 'express';
import {signup, login} from '../Controllers/Employer.js'
import {companyDetails, companyData} from '../Controllers/Company.js'
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/companyDetails", companyDetails);
router.get("/companyDetails", companyData)
export default router