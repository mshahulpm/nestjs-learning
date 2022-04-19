import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRoles(request);
    }
}

function validateRoles(request: any) {
    const role = request.headers.role;
    if (role === 'admin') return true;
}