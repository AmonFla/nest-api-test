import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  /*Redirect, */
} from '@nestjs/common';
import { Request } from 'express';
// import { Observable, of } from 'rxjs';

@Controller({})
export class AppController {
  @Get('/:userId')
  getUser(@Param() params: any) {
    return { id: params.userId, name: 'Test Person', country: 'Test Country' };
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  /*
  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }*/

  @Post()
  @HttpCode(202)
  store(@Req() req: Request) {
    return req.body;
  }

  /* 
  // Redirect Example
  @Get()
  @Redirect('http:://google.com', 302)
  getSite() {
    return { url: 'http://google.com' };
  }
  */
}
