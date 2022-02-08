import { HttpModule } from '@nestjs/axios';
import { Module, NestModule, MiddlewareConsumer, Logger } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(function(req: Request, res, next){
      Logger.log("Call", `${req.method} {${req.url}}`)
    }).forRoutes("api")
}
}
