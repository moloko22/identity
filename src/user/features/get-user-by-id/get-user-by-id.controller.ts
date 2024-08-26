import { Controller, Get, Param } from '@nestjs/common';

import { UserRepository } from 'src/data/repositories/user.repository';
import { GetUserByIdDto } from 'src/user/dto/get-user-by-id.dto';
import { User } from 'src/user/entity/user.entity';

@Controller('/user')
export class GetUserByIdController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('/:id')
  getUserByid(@Param() params: GetUserByIdDto): Promise<User | null> {
    return this.userRepository.findOne(params.id);
  }
}
