// Standardized response function

import { createUserService, deleteUserService, getAllUserService, getUserByIdService, updateUserService } from "../models/users.models.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status)
        .json({
            status,
            message,
            data
        })
}

export const createUser = async(req,res,next)=>{
    const {name,email} = req.body;
    try {
        const newUser = await createUserService(name,email);
        handleResponse(res,201,"User created Successfully", newUser)
    } catch (error) {
        next(error)
        
    }

}


export const getAllUsers = async (req,res,next) => {
    try {
        const allUsers = await getAllUserService();
        handleResponse(res,201,"All users info are fetched",allUsers)
    } catch (error) {
        next(error)
        
    }
    
}

export const getUserById = async(req,res,next)=>{
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) return handleResponse(res, 404, "User not found");
        handleResponse(res,201, "User fetched successfully",user)
    } catch (error) {
        next(error)
        
    }
}

export const updateUser = async(req,res,next)=>{
    const { name,email } = req.body;
    try {
        const updatedUser = await updateUserService(req.params.id,name,email);
        if (!updatedUser) return handleResponse(res,404,"User not found");
        handleResponse(res,201,"User info updated successfully",updatedUser)
    } catch (error) {

        next(error)
        
    }
}

export const deleteUser = async(req,res,next)=>{
    try {
        const user = await deleteUserService(req.params.id);
        if(!user) return handleResponse(res,404,"User not found");
        handleResponse(res,201,"User deleted successfully",user)
    } catch (error) {
        next(error)
        
    }
}