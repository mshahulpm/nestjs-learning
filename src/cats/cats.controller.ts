import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, ParseIntPipe, UsePipes, UseGuards, SetMetadata, } from "@nestjs/common";
import { CreateCatDto } from "../dto/cats.dto";
import { CatsService } from "./cats.service";
import { Cat } from "../interfaces/cat.interface";
import { ForbiddenException } from "src/custom/exceptions";
import { JoiValidationPipe } from "src/custom/pipes";
import * as Joi from "joi";
import { RolesGuard } from "src/guard/role.guard";
import { Roles } from "src/custom/decorator";


const createcatSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    breed: Joi.string().required()
})

@Controller('cats')
@UseGuards(RolesGuard)
export class Cats_Controller {

    constructor(private catService: CatsService) { }

    @Post()
    @Roles('admin')
    @UsePipes(new JoiValidationPipe(createcatSchema))
    async create(@Body() body: CreateCatDto) {

        this.catService.create(body);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return this.catService.findOne(id)
    }

    @Get('error')
    async error(): Promise<Cat[]> {
        throw new ForbiddenException();
    }
}