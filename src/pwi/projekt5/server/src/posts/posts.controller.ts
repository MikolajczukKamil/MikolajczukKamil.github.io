import { Controller, Get, Query } from '@nestjs/common';
import { Post } from './model/Post'
import { PostsService } from './posts.service'

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  index(): string {
    return `
    <h1>Hello posts!</h1>
    <a href="/posts?lang=pl">Posts</a>
    `;
  }

  @Get('/posts')
  getPosts(@Query('lang') lang = 'pl'): Post[] {
    return this.postsService.getPosts(lang.toLowerCase());
  }
}
