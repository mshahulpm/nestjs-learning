import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateCatDto } from "./dto/cats.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";

@Controller('cats')
export class Cats_Controller {

    constructor(private catService: CatsService) { }

    @Post()
    async create(@Body() body: CreateCatDto) {
        this.catService.create(body);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll()
    }
}