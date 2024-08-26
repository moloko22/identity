import { Module } from '@nestjs/common';

import { GetUserByIdController } from './features/get-user-by-id/get-user-by-id.controller';

@Module({
  controllers: [GetUserByIdController],
})
export class UserModule {}
