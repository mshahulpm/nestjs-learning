import { Module } from "@nestjs/common";
import { Cats_Controller } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
    controllers: [Cats_Controller],
    providers: [CatsService],
    exports: [CatsService],
})

export class CatsModule { }