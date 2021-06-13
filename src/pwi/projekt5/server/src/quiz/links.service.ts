import { Injectable } from '@nestjs/common';
import { LinksRepository } from './db/LinksRepository';
import { PageLink } from './model/PageLink';

@Injectable()
export class LinksService {
  constructor(private linksRepository: LinksRepository) {}

  getLinks(lang: string): PageLink[] {
    return this.linksRepository.loadLinks(lang);
  }
}
