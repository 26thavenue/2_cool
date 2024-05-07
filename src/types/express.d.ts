import { User } from "../../schema";

declare module 'express' {
    export interface Request {
        user?: User
    }
}