import express from "express"
import {createAccess, getAccessById,updateAccess, getAccess} from "../controller/AccessController"

const router =express.Router();
router.get('/access' ,getAccess)
router.get('/access/:id' ,getAccessById)
router.post('/access',createAccess)
router.put('/access/:id',updateAccess)
export default router;