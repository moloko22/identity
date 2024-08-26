import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { postgresConfig } from 'configs/postgres.config';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
