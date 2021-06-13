import { Injectable } from '@nestjs/common';
import { Post } from '../model/Post';
import { posts } from './data/posts';

@Injectable()
export class PostsRepository {
  loadPosts(lang: string): Post[] {
    return posts.filter((post) => post.lang === lang);
  }
}
