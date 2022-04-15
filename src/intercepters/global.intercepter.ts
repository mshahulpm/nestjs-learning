import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs";


@Injectable()
export class GlobalInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('global interceptor starts...')

        return next.handle()
            .pipe(
                tap(() => console.log(`global interceptor ends...`))
            )
    }
}