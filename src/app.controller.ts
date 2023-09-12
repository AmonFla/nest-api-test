import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller({})
export class AppController {
  @Get('/:userId')
  getUser(@Param() params: any) {
    return { id: params.userId, name: 'Test Person', country: 'Test Country' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
}
