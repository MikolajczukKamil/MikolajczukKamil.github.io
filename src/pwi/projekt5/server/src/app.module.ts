import { Module } from '@nestjs/common';
import { Utils } from './common/Utils';
import { LinksRepository } from './quiz/db/LinksRepository';
import { QuizRepository } from './quiz/db/QuizRepository';
import { LinksController } from './quiz/links.controller';
import { LinksService } from './quiz/links.service';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';

@Module({
  imports: [],
  controllers: [QuizController, LinksController],
  providers: [
    Utils,
    QuizService,
    LinksService,
    QuizRepository,
    LinksRepository,
  ],
})
export class AppModule {}
