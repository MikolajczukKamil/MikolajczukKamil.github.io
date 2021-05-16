import { Injectable } from '@nestjs/common';
import { Utils } from 'src/common/Utils';
import { QuestionDto } from '../dto/Question.dto';
import { QuizDto } from '../dto/Quiz.dto';
import { Question } from '../model/Question';
import { Quiz, QuizId, QuizSchema } from '../model/Quiz';
import { data } from './data';

@Injectable()
export class QuizRepository {
  constructor(private utils: Utils) {}

  loadQuizes(): QuizSchema[] {
    return data.quizzes
      .map((quiz) => this.removeQuestions(quiz))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private removeQuestions({ id, name, image }: Quiz): QuizSchema {
    return { id, name, image };
  }

  loadQuizSchema(id: QuizId): QuizDto | null {
    const quiz = data.quizzes.find((q) => q.id === id);

    if (!quiz) return null;

    return { ...quiz, questions: this.prepareQuestions(quiz.questions) };
  }

  loadQuiz(id: QuizId): Quiz | null {
    return data.quizzes.find((q) => q.id === id) || null;
  }

  private prepareQuestions(questions: Question[]): QuestionDto[] {
    return this.utils.shuttle(questions).map(({ id, name, options }) => ({
      id,
      name,
      options: this.utils.shuttle(options),
    }));
  }
}
