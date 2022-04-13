import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { CatsModule } from "./cats/cats.module";
import { DogModule } from "./dogs/dogs.module";
import { LoggerMiddleWare, LoggerMiddleWareForDogs } from "./middleware/logger.middleware";

@Module({
  imports: [CatsModule, DogModule],
})

export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('cats')
    consumer
      .apply(LoggerMiddleWareForDogs)
      .forRoutes({ path: 'dogs', method: RequestMethod.POST })
  }
}