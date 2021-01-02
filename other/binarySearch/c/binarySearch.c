#include <stdio.h>
#include <stdlib.h>

int search(int *arr, int size, int target);

int main()
{
  int arr[] = {1, 4, 6, 7, 9, 10, 15, 18, 20};
  int target = 15;
  int size = sizeof(arr) / sizeof(int);

  int result = search(arr, size, target);
  // expected: 6
  printf("result: %d", result);
  return 0;
}

int search(int *arr, int size, int target)
{
  int targetIdx = -1;
  int left = 0;
  int right = size - 1;
  while (left <= right && targetIdx < 0)
  {
    int midIdx = (left + right) / 2;
    if (target > arr[midIdx])
    {
      left = midIdx + 1;
    }
    else if (target < arr[midIdx])
    {
      right = midIdx - 1;
    }
    else
    {
      targetIdx = midIdx;
    }
  }

  return targetIdx;
}
