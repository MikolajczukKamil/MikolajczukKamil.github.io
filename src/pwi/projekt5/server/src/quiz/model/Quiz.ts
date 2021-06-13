import { Question } from './Question';

export type QuizId = number;

export class Quiz {
  id: QuizId;
  lang: string;
  name: string;
  image: string;
  questions: Question[];
}

export class QuizSchema {
  id: QuizId;
  name: string;
  image: string;
}
