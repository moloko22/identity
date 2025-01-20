import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { postgresConfig } from 'configs/postgres.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
