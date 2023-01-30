import { Injectable } from '@nestjs/common';

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
