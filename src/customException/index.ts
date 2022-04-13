import { HttpException, HttpStatus } from "@nestjs/common";


export class ForbiddenException extends HttpException {
    constructor() {
        super({
            status: HttpStatus.FORBIDDEN,
            error: 'Custom Forbidden',
            message: 'You are not allowed to access this resource'
        }, HttpStatus.FORBIDDEN);
    }
}