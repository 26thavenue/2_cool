import express,{Request, Response ,NextFunction} from 'express';
import logger from '../utils/logger';

const loggerMiddleware = (req: Request, res:Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path} ${req.ip}`);
  next();
};

export default loggerMiddleware;