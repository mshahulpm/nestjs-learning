import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controller";
import { DogService } from "./dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogService],
})

export class DogModule { }
