import { Record } from 'immutable';

interface TriviaParams {
  trivia: string;
  id: string;
  author: string;
  score?: number;
}

const TriviaRecord = Record({
  trivia: '',
  id: '',
  author: '',
  score: 0
})

export class Trivia extends TriviaRecord {
  trivia: string;
  id: string;
  author: string;
  score: number;

  constructor(props: TriviaParams) {
    super(props);
  }
}
