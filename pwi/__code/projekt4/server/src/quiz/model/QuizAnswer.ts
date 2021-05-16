import { QuestionId } from './Question';
import { QuestionOptionId } from './QuestionOption';
import { QuizId } from './Quiz';

export class QuestionAnswer {
  questionId: QuestionId;
  answer: QuestionOptionId;
}

export class QuizAnswer {
  quizId: QuizId;
  questions: QuestionAnswer[];
}
