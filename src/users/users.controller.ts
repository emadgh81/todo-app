import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Post('register')
  register(@Body('email') email: string, @Body('password') password: string) {
    return this.users.register(email, password);
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    const user = await this.users.findById(id);
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }
}
