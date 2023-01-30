import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Injectable()
export class AuthService {
  constructor(
  private usersService: UsersService,
  private jwtService: JwtService 
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findWithEmail(email);
    console.log(user)
    console.log(user)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload, jwtConstants),
    };
  }
}