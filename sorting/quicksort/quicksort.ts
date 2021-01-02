export const quicksort = (inputArr: number[]): number[] => {
  if (inputArr.length <= 1) {
    return inputArr;
  }

  let pivotIdx = Math.floor(Math.random() * (inputArr.length - 1));
  // let pivotIdx = inputArr.length - 1; // if we choose the last element as pivot we would remove the need to swap the pivot to the end
  const pivot = inputArr[pivotIdx];

  swap(inputArr, pivotIdx, inputArr.length - 1); // put pivot at end of array
  pivotIdx = inputArr.length - 1; // update after swap

  /* Partition */
  // i keeps track of the next item in list that is larger than the pivot
  // j scans through the list to find elements less than or equal to the pivot, and throws them back to where i is
  let i = 0;
  let j = 0;
  while (j < inputArr.length - 1) {
    if (inputArr[j] <= pivot) {
      swap(inputArr, i, j);
      i++;
    }
    j++;
  }

  swap(inputArr, i, pivotIdx); // swap pivot back to its sorted position
  pivotIdx = i; // update after swap

  // sort both partitions
  const left = quicksort(inputArr.slice(0, pivotIdx));
  const right = quicksort(inputArr.slice(pivotIdx + 1, inputArr.length));

  return [...left, pivot, ...right];
};

// mutates input arr
const swap = (arr: number[], idx1: number, idx2: number): void => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};
