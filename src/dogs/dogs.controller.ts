import { Controller, Get, Post, Body } from "@nestjs/common";
import { DogService } from "./dogs.service";
import { Dog } from "src/interfaces/dogs";
import { CreateDogDto } from "src/dto/dog.dto";
import { ClassValidationPipe } from "src/custom/pipes";

@Controller('dogs')
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
}