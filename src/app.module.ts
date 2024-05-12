import { Module } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  controllers: [CreateAccountController],
  providers: [PrismaClient],
})
export class AppModule {}
