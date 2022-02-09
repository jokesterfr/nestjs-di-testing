import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    /*
     * An error is expected within the E2E testing,
     * AppService is a dependency of our AppController
     */
    // AppService
  ],
})
export class AppModule {}
