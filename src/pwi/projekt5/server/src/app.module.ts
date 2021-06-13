import { Module } from '@nestjs/common';
import { Utils } from './common/Utils';
import { QuizRepository } from './quiz/db/QuizRepository';
import { LinksController } from './links/links.controller';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';
import { PostsRepository } from './posts/db/PostsRepository';
import { LinksService } from './links/links.service';
import { LinksRepository } from './links/db/LinksRepository';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [QuizController, LinksController, PostsController],
  providers: [
    Utils,
    QuizService,
    LinksService,
    QuizRepository,
    LinksRepository,
    LinksService,
    PostsRepository,
    PostsService,
  ],
})
export class AppModule {}
