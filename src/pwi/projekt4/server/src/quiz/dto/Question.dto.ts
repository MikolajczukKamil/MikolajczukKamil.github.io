import { QuestionId } from '../model/Question';
import { QuestionOption } from '../model/QuestionOption';

export class QuestionDto {
  id: QuestionId;
  name: string;
  options: QuestionOption[];
}
