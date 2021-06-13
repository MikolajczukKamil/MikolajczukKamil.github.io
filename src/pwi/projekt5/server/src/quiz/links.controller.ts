import { Controller, Get, Query } from '@nestjs/common';
import { LinksService } from './links.service';
import { PageLink } from './model/PageLink';

@Controller()
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  index(): string {
    return `
    <h1>Hello links!</h1>
    <a href="/links?lang=pl">Links</a>
    `;
  }

  @Get('/links')
  getLinks(@Query('lang') lang = 'pl'): PageLink[] {
    return this.linksService.getLinks(lang.toLowerCase());
  }
}
