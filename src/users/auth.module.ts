import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthResolver } from './auth.resolver';
import { UserDoesNotExistConstraint } from './validation/user-does-not-exist.constraint';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.AUTH_SECRET,
        signOptions: {
          expiresIn: '60m',
        },
      }),
    }),
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    AuthService,
    AuthResolver,
    UsersResolver,
    UsersService,
    UserDoesNotExistConstraint,
  ],
})
export class AuthModule {}
