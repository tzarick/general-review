#include <stdio.h>
#include <stdlib.h>

void merge(int *left, int leftSize, int *right, int rightSize, int *result);
void mergesort(int *inputArr, int size);
void fillSubarray(int *arr, int *subarr, int start, int end);
void printArray(int *arr, int size);

int main()
{
  int input[] = {3, 5, -1, 3, 8, 10, 200, 4};
  int size = sizeof(input) / sizeof(input[0]);
  mergesort(input, size);

  printArray(input, size);
  return 0;
}

void mergesort(int *inputArr, int size)
{
  if (size <= 1)
  {
    return;
  }

  // split into 2 halves, mergesort each, then merge them together
  int leftSize = size / 2;
  int *left = (int *)malloc(leftSize * sizeof(int));
  fillSubarray(inputArr, left, 0, size / 2);

  int rightSize = size - (size / 2);
  int *right = (int *)malloc(rightSize * sizeof(int));
  fillSubarray(inputArr, right, size / 2, size);

  mergesort(left, leftSize);
  mergesort(right, rightSize);
  merge(left, leftSize, right, rightSize, inputArr); // merge left and right back into inputArr

  free(left);
  free(right);
  return;
}

void merge(int *left, int leftSize, int *right, int rightSize, int *result)
{
  // 2-finger method
  int leftPointer = 0, rightPointer = 0, resultPointer = 0;
  while (leftPointer < leftSize && rightPointer < rightSize)
  {
    if (left[leftPointer] <= right[rightPointer])
    {
      result[resultPointer] = left[leftPointer];
      leftPointer++;
    }
    else
    {
      result[resultPointer] = right[rightPointer];
      rightPointer++;
    }
    resultPointer++;
  }

  // add on whatever is left (only one of these will execute)
  while (leftPointer < leftSize)
  {
    result[resultPointer] = left[leftPointer];
    leftPointer++;
    resultPointer++;
  }
  while (rightPointer < rightSize)
  {
    result[resultPointer] = right[rightPointer];
    rightPointer++;
    resultPointer++;
  }

  return;
}

void fillSubarray(int *arr, int *subarr, int start, int end)
{
  for (int i = start; i < end; i++)
  {
    int idx = i - start;
    subarr[idx] = arr[i];
  }

  return;
}

void printArray(int *arr, int size)
{
  for (int i = 0; i < size; i++)
  {
    printf("%d\n", arr[i]);
  }
  printf("\n");

  return;
}