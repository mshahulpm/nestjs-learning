import { Module } from "@nestjs/common";
import { Cats_Controller } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
@Module({
  controllers: [Cats_Controller],
  providers: [CatsService],
})

export class AppModule { }