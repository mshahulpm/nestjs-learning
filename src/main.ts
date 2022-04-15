import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';
import { AuthGuard } from './guard/ath.guard';
import { GlobalInterceptor } from './intercepters/global.intercepter';
import { TimeOutInterceptor } from './intercepters/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalGuards(new AuthGuard())
  app.use(globalLogger)
  app.useGlobalInterceptors(new GlobalInterceptor(), new TimeOutInterceptor())
  await app.listen(3000);
}
bootstrap();


function globalLogger(req: Request, res: Response, next: NextFunction) {
  console.log('global logger....')
  next()
}