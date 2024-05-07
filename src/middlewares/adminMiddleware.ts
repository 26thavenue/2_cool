import {Request,Response,NextFunction} from 'express'
import { ROLE } from '../types/db'


export async function adminMiddleware(req: Request, res: Response, next: NextFunction) {
   const user = req.user
   if(user?.role !== ROLE.ADMIN){
         return next(res.json({message: 'Unauthorized'}).status(403))
    }
    next()
}