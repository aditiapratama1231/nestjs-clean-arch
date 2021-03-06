import { Module } from '@nestjs/common'
import { LoginController } from '../login/login.controller'
import { UserRepository } from 'src/infrastructure/persistence/repository/user.repository'

@Module({
    controllers: [LoginController],
    providers: [UserRepository],
})

export class LoginModule{}