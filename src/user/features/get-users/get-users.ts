import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserRepository } from 'src/data/repositories/user.repository';
import { User } from 'src/user/entity/user.entity';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class GetUsersController {
  constructor(private readonly userRepository: UserRepository) { }

  @ApiOperation({ summary: 'Get users' })
  @Get()
  getUsers(): Promise<User[] | null> {
    return this.userRepository.findAll();
  }
}
