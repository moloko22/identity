import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { postgresConfig } from 'configs/postgres.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
