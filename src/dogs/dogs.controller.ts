import { Controller, Get, Post, Body } from "@nestjs/common";
import { DogService } from "./dogs.service";
import { Dog } from "src/interfaces/dogs";

class DogCreateDto {
    name: string;
    age: number;
    breed: string;
    owner: string;
}

@Controller('dogs')
export class DogsController {

    constructor(private dogService: DogService) { }

    @Post()
    async create(@Body() body: DogCreateDto) {
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