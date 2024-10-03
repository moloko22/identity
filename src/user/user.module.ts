import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from 'src/data/repositories/user.repository';
import { GetUserByIdController } from './features/get-user-by-id/get-user-by-id.controller';
import { User } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [GetUserByIdController],
  providers: [UserRepository],
})
export class UserModule {}
