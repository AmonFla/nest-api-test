import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller({})
export class AppController {
  @Get()
  getUser() {
    return { name: 'Test Person', country: 'Test Country' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
}
