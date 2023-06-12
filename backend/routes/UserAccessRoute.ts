import express from "express"
import {getUserAccessById, getUserAccess,createUserAccess} from "../controller/UserAccessController"
import {createUser, getUserById, getUsers} from "../controller/UserController"

const router =express.Router();
router.get('/useraccess' ,getUserAccess)
router.get('/useraccess/:id' ,getUserAccessById)
router.post('/useraccess',createUserAccess)

export default router;