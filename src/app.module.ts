import { Module } from '@nestjs/common';
import { PeopleController } from './controller/PeopleController';
import { PeopleService } from './service/PeopleService';

@Module({
  imports: [],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class AppModule {}
