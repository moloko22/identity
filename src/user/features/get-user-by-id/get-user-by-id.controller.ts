import { Controller, Get, Param } from '@nestjs/common';

import { GetUserByIdDto } from 'src/user/dto/get-user-by-id.dto';

@Controller('/user')
export class GetUserByIdController {
  @Get('/:id')
  getUserByid(@Param() params: GetUserByIdDto): string {
    return params.id;
  }
}
