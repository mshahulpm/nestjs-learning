import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // create a logger instance
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add')
  add(@Body() data: number[]): number {
    this.logger.log('Addition of numbers: ' + data.toString());
    return this.appService.add(data);
  }
}
