import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js"
import validateUser from "../middlewares/inputValidator.js"

const router = express.Router()

router.post("/createuser",validateUser ,createUser)
router.get("/alluser",getAllUsers)
router.get("/user/:id",getUserById)
router.put("/updateuser/:id",validateUser,updateUser)
router.delete("/deleteuser/:id",deleteUser)

export default router;