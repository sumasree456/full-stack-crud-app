import express from "express"
import {createOrg, getOrgById, getOrg} from "../controller/OrgController"

const router =express.Router();
router.get('/org' ,getOrg)
router.get('/org/:id' ,getOrgById)
router.post('/org',createOrg)
export default router;