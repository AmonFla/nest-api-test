import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  HttpCode,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) { }
  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.userService.getOne(params);
  }

  @Get()
  findAll() {
    return this.userService.getAll();
  }

  @Post()
  @HttpCode(202)
  store(@Req() req: Request) {
    return this.userService.create(req);
  }

  @Delete('/:userId')
  delete(@Param() params: { userId: number }) {
    return this.userService.delete(params);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() params: { userId: number }) {
    return this.userService.update(req, params);
  }
}
