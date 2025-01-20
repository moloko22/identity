import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { UserRepository } from 'src/data/repositories/user.repository';
import { GetUserByIdDto } from 'src/users/dto/get-user-by-id.dto';
import { UserDto } from 'src/users/dto/user.dto';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('user')
export class GetUserByIdController {
  constructor(private readonly userRepository: UserRepository) { }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({ type: 'string', description: 'User id', name: 'id', required: true })
  @Get('/:id')
  getUserByid(@Param() { id }: GetUserByIdDto): Promise<UserDto | null> {
    return this.userRepository.findOneById(id);
  }
}
