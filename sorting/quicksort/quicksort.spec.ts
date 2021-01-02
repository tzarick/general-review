import { expect } from 'chai';
import { describe } from 'mocha';
import { quicksort } from './quicksort';

const testCases = [
  {
    input: [3, 2, 7, 9, 1],
    expected: [1, 2, 3, 7, 9],
  },
  {
    input: [4, 6, 4, 5, 3, 7, 9, 8, 2, 0, 1],
    expected: [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9],
  },
  {
    input: [2, 2, 2, -1, 5, 0, 9, 8, 2, 0, 1],
    expected: [-1, 0, 0, 1, 2, 2, 2, 2, 5, 8, 9],
  },
];

describe('Solution Test Cases - Quicksort', () => {
  describe('Tests', () => {
    for (let i = 0; i < testCases.length; i++) {
      const { input, expected } = testCases[i];

      it(`Case ${i + 1}`, () => {
        expect(quicksort(input)).to.deep.equal(expected);
      });
    }
  });
});
