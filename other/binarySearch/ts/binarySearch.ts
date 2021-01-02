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
