export const sort = (inputArr: number[]): number[] => {
  if (inputArr.length <= 1) {
    return inputArr;
  }

  let left = inputArr.slice(0, Math.floor(inputArr.length / 2));
  let right = inputArr.slice(Math.floor(inputArr.length / 2), inputArr.length);

  left = sort(left);
  right = sort(right);

  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  let result = [];

  /* "2 Finger" Method */
  let leftPointer = 0,
    rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] <= right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }

  // add the leftover elements to the back (only one of these statements will execute), we know they're already sorted
  if (leftPointer < left.length) {
    result = result.concat(...left.slice(leftPointer));
  }
  if (rightPointer < right.length) {
    result = result.concat(...right.slice(rightPointer));
  }

  return result;
};
