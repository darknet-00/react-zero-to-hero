import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalStrategy } from '../strategies/local.strategy';
import { UsersModule } from '../../modules/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { AuthController } from '../controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../../models/user.entity'
import { UsersService } from '../../services/users.service'
import { GoogleAuthService } from '../services/google.auth.service'
import { GithubAuthService } from '../services/github.auth.service'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy, GoogleAuthService, GithubAuthService],
  controllers: [AuthController],
  exports: [AuthService, UsersService, GoogleAuthService, GithubAuthService],
})
export class AuthModule {}
