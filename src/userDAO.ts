import db from '../db'
import {users, User, NewUser} from '../schema'

import { eq } from 'drizzle-orm'

export class UserDAO{

    async getAllUsers(){}

    async createUser(){}

    async deleteUser(){}

    async updateUser(){}

    async getUserById(id:string){
        try {
            if(!id){
                throw new Error('Id is required')
            }
            
            const user:User | User [] = await db.select().from(users).where(eq(users.id,id))

            if(!user){
                const error = new Error('User not found')
                return 
            }

            return user
            
        } catch (error) {
            
        }
    }
}