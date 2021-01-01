export const sort = (inputArr: number[]): number[] => {
  for (let i = 1; i < inputArr.length; i++) {
    let j = i;
    while (j > 0 && inputArr[j - 1] > inputArr[j]) {
      swap(inputArr, j, j - 1);
      j--;
    }
  }

  return inputArr;
};

// mutates input arr
const swap = (arr: number[], idx1: number, idx2: number): void => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};
