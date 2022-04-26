import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // create a logger instance
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('add')
  add(data: number[]): number {
    this.logger.log('Addition of numbers: ' + data.toString());
    return this.appService.add(data);
  }
}
