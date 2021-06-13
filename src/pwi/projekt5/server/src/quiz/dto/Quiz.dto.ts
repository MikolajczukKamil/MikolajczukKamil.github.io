import { QuizId } from '../model/Quiz';
import { QuestionDto } from './Question.dto';

export class QuizDto {
  id: QuizId;
  name: string;
  questions: QuestionDto[];
}
