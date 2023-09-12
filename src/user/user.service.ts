import { Injectable } from '@nestjs/common';
import { Request } from 'express';

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

  update(req: Request, params: { userId: number }) {
    return { body: req.body, params };
  }

  delete(params: { userId: number }) {
    return params;
  }
}
