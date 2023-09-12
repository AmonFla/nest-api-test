import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  getAll() {
    return [];
  }

  getOne(params: { userId: number }) {
    return params;
  }

  create(req: Request) {
    return req.body;
  }

  update(updateUserDto: UpdateUserDto, params: { userId: number }) {
    return { body: updateUserDto, params };
  }

  delete(params: { userId: number }) {
    return params;
  }
}
