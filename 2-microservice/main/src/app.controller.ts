import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxyFactory, ClientOptions, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  private client = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001
    }
  })
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  add(@Body() data: number[]): Promise<number> {
    console.log(data)
    return this.client.send<number, number[]>('add', data).toPromise();
  }
}
