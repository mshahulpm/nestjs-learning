import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";



@Injectable()
export class LoggerMiddleWare implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request...');
        next();
    }
}


@Injectable()
export class LoggerMiddleWareForDogs implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        if (req.query.name === 'dog') return res.status(403).json({ message: 'Sorry access denied' })
        console.log('dogs routes accessed....')
        next()
    }
}