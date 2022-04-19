import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TransformInterceptor } from "src/intercepters/transform.interceptor";
import { DogsController } from "./dogs.controller";
import { DogService } from "./dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogService,
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor
        }
    ],
})

export class DogModule { }
