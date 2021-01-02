import { expect } from 'chai';
import { describe } from 'mocha';
import { search } from './binarySearch';

const testCases = [
  {
    input: [[1, 3, 6, 7, 9, 10, 12], 9],
    expected: 4,
  },
  {
    input: [[-3, -2, 4, 6, 70, 100], -2],
    expected: 1,
  },
  {
    input: [[2, 3, 4, 7, 8, 90, 10000], 90],
    expected: 5,
  },
];

describe('Solution Test Cases - Binary Search', () => {
  describe('Tests', () => {
    for (let i = 0; i < testCases.length; i++) {
      const { input, expected } = testCases[i];

      it(`Case ${i + 1}`, () => {
        expect(search(input[0] as number[], input[1] as number)).to.equal(
          expected
        );
      });
    }
  });
});
