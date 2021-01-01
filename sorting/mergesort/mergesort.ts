export const sort = (inputArr: number[]): number[] => {
  if (inputArr.length <= 1) {
    return inputArr;
  }

  let left = inputArr.slice(0, Math.floor(inputArr.length / 2));
  let right = inputArr.slice(Math.floor(inputArr.length / 2), inputArr.length);
  // console.log(`left: ${left}`);
  // console.log(`right: ${right}`);

  left = sort(left);
  right = sort(right);

  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  let result = [];

  // let leftPointer = 0, rightPointer = 0;
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }

  if (left.length) {
    result = result.concat(...left);
  }
  if (right.length) {
    result = result.concat(...right);
  }

  return result;
};
