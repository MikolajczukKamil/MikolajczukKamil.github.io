import { QuestionOption, QuestionOptionId } from './QuestionOption'

export type QuestionId = number

export class Question {
  id: QuestionId
  name: string;
  correct: QuestionOptionId;
  options: QuestionOption[];
}
