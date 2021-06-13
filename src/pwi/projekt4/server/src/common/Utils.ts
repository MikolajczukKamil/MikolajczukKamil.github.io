import { Injectable } from '@nestjs/common';

@Injectable()
export class Utils {
  shuttle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }
}
