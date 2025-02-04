import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {users, User, NewUser} from '../../schema'
import db from '../../db'
import { eq } from 'drizzle-orm'


export const authMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization

    if(!token){
        return next(res.json({message: 'Unauthorized'}).status(401))
    }

    try {

        const payload= jwt.verify(token as string, process.env.JWT_SECRET as string) as any

        const user = await db.query.users.findFirst({
            where: eq(users.id, payload.id)
        })

        if(!user){
            return next(res.json({message: 'Unauthorized'}).status(401))
        }

        req.user = user
        next()
        
    } catch (error) {
        next(res.json({message: 'Unauthorized'}).status(401))
    }

    


}