import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QuizDto } from './dto/Quiz.dto';
import { QuizSchema } from './model/Quiz';
import { QuizAnswer } from './model/QuizAnswer';
import { QuizResult, QuizService } from './quiz.service';

@Controller()
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  index(): string {
    return `
    <h1>Hello world!</h1>
    <a href="/quizzes?lang=pl">Quizy</a><br>
    <a href="/quiz?id=1">Quiz 1</a><br>
    `;
  }

  @Get('/quiz')
  getQuiz(@Query('id') query?: string): QuizDto {
    if (!query) throw new Error(`No quiz id found`);

    const id = parseInt(query);

    const quiz = this.quizService.getQuiz(id);

    if (!quiz) throw new Error(`No quiz with id=${id} found`);

    return quiz;
  }

  @Get('/quizzes')
  getQuizzes(@Query('lang') lang = 'pl'): QuizSchema[] {
    return this.quizService.getQuizzesSchemas(lang.toLowerCase());
  }

  @Post('/quiz')
  checkQuiz(
    @Body({ transform: (r) => r.body }) answer: QuizAnswer,
  ): QuizResult {
    return this.quizService.checkQuiz(answer);
  }
}
