/* Bubble Sort */
export const sort = (array: number[]): number[] => {
  let swapsPerSweep = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        noTempSwap(array, j, j + 1);
        swapsPerSweep++;
      }
    }
    if (swapsPerSweep === 0) break;
    swapsPerSweep = 0; // reset for next sweep
  }
  return array;
};

// mutates input arr
const swap = (arr: number[], idx1: number, idx2: number): void => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

// swap using bit operations instead of temp for fun
// XOR is its own inverse, allows this relationship to be possible
const noTempSwap = (arr: number[], idx1: number, idx2: number): void => {
  arr[idx1] = toBinary(arr[idx1]) ^ toBinary(arr[idx2]);
  arr[idx2] = arr[idx1] ^ toBinary(arr[idx2]);
  arr[idx1] = arr[idx1] ^ arr[idx2];

  // back to decimal
  arr[idx1] = parseInt(arr[idx1].toString(), 2);
  arr[idx2] = parseInt(arr[idx2].toString(), 2);
};

const toBinary = (num: number): number => {
  return Number((num >>> 0).toString(2)); // bit shift at beginning in order to correctly handle negative numbers (numbers are stored in 2's complement in JS) (https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript)
};
