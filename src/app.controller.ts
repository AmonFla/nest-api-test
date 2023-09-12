import { Controller, Get, Post } from '@nestjs/common';

@Controller({})
export class AppController {
  @Get()
  getUser() {
    return { name: 'Test Person', country: 'Test Country' };
  }

  @Post()
  store() {
    return 'Post request successful';
  }
}
