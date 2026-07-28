// Standardized response function

import { createUserService } from "../models/users.models";

const handleResponse = (res, status, message, data = null) => {
    res.status(status)
        .json({
            status,
            message,
            data
        })
}

export const createUser = async(req,res)=>{
    const {name,email} = req.body;
    try {
        const newUser = await createUserService(name,email);
        handleResponse(res,201,"User created Successfully", newUser)
    } catch (error) {
        next(error)
        
    }

}