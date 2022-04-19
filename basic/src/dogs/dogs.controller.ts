import { Controller, Get, Post, Body, UseInterceptors } from "@nestjs/common";
import { DogService } from "./dogs.service";
import { Dog } from "src/interfaces/dogs";
import { CreateDogDto } from "src/dto/dog.dto";
import { ClassValidationPipe } from "src/custom/pipes";
import { LoggingIntercepter } from "src/intercepters/loging.intercepter";

@Controller('dogs')
// @UseInterceptors(LoggingIntercepter)
@UseInterceptors(new LoggingIntercepter())   // another method
export class DogsController {

    constructor(private dogService: DogService) { }

    @Post()
    async create(
        @Body(new ClassValidationPipe()) body: CreateDogDto
    ) {
        const newDog = {
            id: Date.now(),
            ...body
        }
        this.dogService.create(newDog)
        return newDog
    }

    @Get()
    async findAll(): Promise<Dog[]> {
        return this.dogService.findAll()
    }

    @Get('/timeOut')
    async timeOut(): Promise<any> {
        // return this.dogService.findAll()
        setTimeout(() => {
            return Promise.resolve(this.dogService.findAll())
        }, 10000)

    }
}