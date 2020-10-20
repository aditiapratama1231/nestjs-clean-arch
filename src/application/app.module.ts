import { Module } from '@nestjs/common';
import { LoginModule } from './use_cases/user/login/login.module';
// import { databaseConfigService } from 'src/infrastructure/config/db.config'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from 'src/infrastructure/config/database/db.module'

@Module({
  imports: [
    LoginModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule
  ],
})
export class AppModule {}
