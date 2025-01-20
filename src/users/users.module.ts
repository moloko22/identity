import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRepository } from 'src/data/repositories/user.repository';
import { GetUserByIdController } from './features/v1/get-user-by-id/get-user-by-id';
import { GetUsersController } from './features/v1/get-users/get-users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, UsersService],
  controllers: [GetUserByIdController, GetUsersController],
})
export class UsersModule { }
