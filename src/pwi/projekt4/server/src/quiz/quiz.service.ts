import { Injectable } from '@nestjs/common';
import { QuizRepository } from './db/QuizRepository';
import { QuizDto } from './dto/Quiz.dto';
import { QuizId, QuizSchema } from './model/Quiz';
import { QuizAnswer } from './model/QuizAnswer';

export interface QuizResult {
  correct: number;
  errors: number;
}

@Injectable()
export class QuizService {
  constructor(private quizRepository: QuizRepository) {}

  getQuiz(id: QuizId): QuizDto | null {
    return this.quizRepository.loadQuizSchema(id);
  }

  getQuizesSchemas(): QuizSchema[] {
    return this.quizRepository.loadQuizes();
  }

  checkQuiz(answer: QuizAnswer): QuizResult {
    const quiz = this.quizRepository.loadQuiz(answer.quizId);

    if (!quiz) throw new Error(`Quiz id = ${answer.quizId} not found`);

    let correct = 0;
    let errors = 0;

    for (const question of quiz.questions) {
      if (
        answer.questions.some(
          (q) => question.id === q.questionId && q.answer === question.correct,
        )
      ) {
        correct++;
      } else {
        errors++;
      }
    }

    return { errors, correct };
  }
}
