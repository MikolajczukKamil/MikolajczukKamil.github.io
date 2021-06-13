import { Injectable } from '@nestjs/common';
import { PageLink } from '../model/PageLink';
import { links } from './data/links';

@Injectable()
export class LinksRepository {
  loadLinks(lang: string): PageLink[] {
    return links.filter((quiz) => quiz.lang === lang);
  }
}
