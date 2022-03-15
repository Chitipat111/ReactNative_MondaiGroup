import {
  Controller,
  Post,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  Delete,
  Put,
  Logger,
  Query,
  Body,
  Res,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entity/users.entity';
import { JwtService } from '@nestjs/jwt';
import { lastValueFrom } from 'rxjs';
import * as crypto from 'crypto';
export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

// import {exceptionhandler} from 'src/excepmes/excephand';
@Controller('users')
export class UsersController {
  appService: any;
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post() // POST /Users
  @HttpCode(HttpStatus.CREATED)
  async createUser(
    @Query('username') username: string,
    @Query('password') password: string,
  ): Promise<Users> {
    const user = new Users();
    const hashedPassword = await md5(password);
    user.userName = username; //newUser.userName;
    user.userImage = 1; //newUser.userPassword;
    user.userPassword = hashedPassword;
    return await this.userService.createOrUpdate(user);
  }

  @Get() // GET /Users
  async findUsers(): Promise<Users[]> {
    return await this.userService.findAll();
  }
  
  @Get('/findUser')
  async findUser(@Query('id') id: number): Promise<Users> {
    return await this.userService.findOne(id);
  }

  @Put()
  async updateUser(
    @Query('id') id: number,
    @Query('oldPass') oldPass: string,
    @Query('newPass') newPass: string,
  ): Promise<Users> {
    const user = await this.userService.findOne(id);
    const hashedNewPassword = await md5(newPass);
	const hashedOldPassword = await md5(oldPass);
    console.log(user);
    if (await hashedOldPassword != user.userPassword) {
      throw new BadRequestException('Wrong Password');
    }

    user.userPassword = hashedNewPassword;
    return await this.userService.createOrUpdate(user);
  }
  
  @Put('/updatePic')
  async updatePic(
    @Query('id') id: number,
    @Query('image') image: number,

  ): Promise<Users> {
  console.log(id)
  console.log(image)

    const user = await this.userService.findOne(id);
	console.log(user)
    user.userImage = image;
	
    return await this.userService.createOrUpdate(user);
  }

  @Delete(':userId') // DELETE /Users/123
  async deleteUser(@Param('userId') id: number) {
    await this.userService.delete(id);
    return { success: true };
  }

  @Post('/login')
  async login(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    const user = await this.userService.findUser(username);
    if (user == undefined) {
      throw new BadRequestException('Wrong username or password');
    }
    if ( md5(password) != user.userPassword) {
      throw new BadRequestException('Wrong username or password');
    }
    const jwt = await this.jwtService.signAsync({
      id: user.userId,
      username: user.userName,
      password: user.userPassword,
      image: user.userImage,
    });
    return jwt;
  }
}
