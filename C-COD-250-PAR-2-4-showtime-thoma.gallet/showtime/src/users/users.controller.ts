// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}
  // REGISTER
  @Post('auth/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }
  // Login 
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user._doc);
    // return req.user._doc;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update-email')
  updateEmail(@Body() createUserDto: CreateUserDto, @Request() req: any) {
    console.log("COUCOU", createUserDto)
      if (createUserDto.email === undefined) {
        return "KO";
      }
    return this.usersService.updateEmail(req.user.id, createUserDto);
  }

  @Put('/add-booking')
  addBooking(@Headers() headers, @Body() createUserDto: CreateUserDto) {
    return this.usersService.addBooking(headers.id, createUserDto);
  }

  @Put('/add-favorite')
  addFavorite(@Headers() headers, @Body() createUserDto: CreateUserDto) {
    return this.usersService.addFavorite(headers.id, createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log("toto")
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }


}


