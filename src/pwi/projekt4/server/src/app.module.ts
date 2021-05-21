import { Module } from '@nestjs/common';
import { Utils } from './common/Utils';
import { QuizRepository } from './quiz/db/QuizRepository';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';

@Module({
  imports: [],
  controllers: [QuizController],
  providers: [QuizService, Utils, QuizRepository],
})
export class AppModule {}
