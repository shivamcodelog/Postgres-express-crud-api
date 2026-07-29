import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/#createuser",createUser)
router.get("/#alluser",getAllUsers)
router.get("/#user/:id",getUserById)
router.put("/#updateuser/:id",updateUser)
router.delete("/#deleteuser/:id",deleteUser)

export default router;