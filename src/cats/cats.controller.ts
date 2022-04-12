import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Param, Body, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { CreateCat } from "./cats.dto";


@Controller('cats')
export class CatsController {

    @Post()
    @HttpCode(201) // custom status code 
    create(@Req() req: Request, @Body() body: CreateCat): string {
        console.log(req.body, body)
        return 'created new cat doc'
    }

    @Get()
    findAll(@Req() req: Request): string {
        console.log(req.query)
        return 'This action return all cats'
    }

    // headers 
    @Get('headers')
    @Header('Cookies', 'no-fun-cookie=yes')
    find(): string {
        return 'set no-fun-cookie header'
    }

    // redirection 
    @Get('redirect')
    @Redirect('https://google.com', 302)
    findRedirect(): string {
        return 'redirect to google'
    }

    // Route parameters
    @Get('param/:id')
    findOne(@Param() params): string {
        return 'The cat id is ' + params.id
    }

    // Asynchronicity
    @Get('async')
    async findAsync(): Promise<any> {
        return { message: 'This action returns all async cats' }
    }

    // res object 
    @Get('res')
    findRes(@Res() res: Response): any {
        res.json({ message: 'this response is from res object', time: new Date() })
    }
}