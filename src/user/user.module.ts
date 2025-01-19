import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from 'src/data/repositories/user.repository';
import { GetUserByIdController } from './features/get-user-by-id/get-user-by-id';
import { User } from './entity/user.entity';
import { GetUsersController } from './features/get-users/get-users';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [GetUserByIdController, GetUsersController],
  providers: [UserRepository],
})
export class UserModule { }
