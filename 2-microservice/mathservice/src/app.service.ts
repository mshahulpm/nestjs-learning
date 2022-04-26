import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  add(data: number[]): number {
    return data.reduce((a, b) => a + b);
  }
}
