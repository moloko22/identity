import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'guards/jwt.guard';

import { UserRepository } from 'src/data/repositories/user.repository';
import { UserDto } from 'src/users/dto/user.dto';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class GetUsersController {
  constructor(private readonly userRepository: UserRepository) {}

  @ApiOperation({ summary: 'Get users' })
  @Get()
  @UseGuards(JwtGuard)
  getUsers(): Promise<UserDto[] | null> {
    return this.userRepository.findAll();
  }
}
