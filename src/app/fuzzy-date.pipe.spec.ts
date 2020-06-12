import { FuzzyDatePipe } from './fuzzy-date.pipe';

describe('FuzzyDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FuzzyDatePipe();
    expect(pipe).toBeTruthy();
  });
});
