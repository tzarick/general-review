// binary search- return index of target
export const search = (arr: number[], target: number): number => {
  let targetIndex = -1,
    left = 0,
    right = arr.length - 1;

  while (left <= right && targetIndex < 0) {
    const mid = Math.floor((left + right) / 2);
    if (target < arr[mid]) {
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      targetIndex = mid;
    }
  }
  return targetIndex;
};

export const searchRecursive = (
  arr: number[],
  target: number,
  left: number,
  right: number
): number => {
  if (left > right) {
    return -1;
  }
  let targetIndex = -1;
  const mid = Math.floor((left + right) / 2);
  if (target < arr[mid]) {
    targetIndex = searchRecursive(arr, target, left, mid - 1);
  } else if (target > arr[mid]) {
    targetIndex = searchRecursive(arr, target, mid + 1, right);
  } else {
    targetIndex = mid;
  }

  return targetIndex;
};
