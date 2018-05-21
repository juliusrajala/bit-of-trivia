import { Trivia } from 'src/core/Records';

export function loadTrivia(triviaId: string): Promise<Trivia> {
  return Promise.resolve()
    .then(() => new Trivia({
      trivia: 'something',
      id: 'something',
      author: 'as'
    }));
}

export function submitTrivia(formData: any): Promise<Trivia> {
  return Promise.resolve()
    .then(() => new Trivia({
      trivia: 'something',
      id: 'something',
      author: 'as'
    }))
}