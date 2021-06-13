import { Injectable } from '@nestjs/common';
import { PostsRepository } from './db/PostsRepository';
import { Post } from './model/Post';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  getPosts(lang: string): Post[] {
    return this.postsRepository.loadPosts(lang);
  }
}
