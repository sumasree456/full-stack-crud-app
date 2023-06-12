import express from "express"
import { Response } from "express-serve-static-core";
import sequelize from "../config/database";
import {createUser, getUserById, getUsers, allusers} from "../controller/UserController"

const router =express.Router();
router.get('/users' ,getUsers)
router.get('/allusers' ,allusers)
router.get('/users/:id' ,getUserById)
router.post('/users',createUser)
export default router;


