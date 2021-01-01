#include <stdio.h>
#include <stdlib.h>

void mySwap(int arr[], int idx1, int idx2)
{
  int temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

void noTempSwap(int arr[], int idx1, int idx2)
{
  arr[idx1] = arr[idx1] ^ arr[idx2];
  arr[idx2] = arr[idx1] ^ arr[idx2];
  arr[idx1] = arr[idx1] ^ arr[idx2];
}

void sort(int arr[], int size)
{

  for (int i = size - 1; i >= 0; i--)
  {
    int swapsPerPass = 0;
    for (int j = 0; j < i; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        noTempSwap(arr, j, i);
        swapsPerPass++;
      }
    }

    if (swapsPerPass == 0)
    {
      break;
    }

    swapsPerPass = 0;
  }
}

int main()
{
  int arr[5] = {3, 2, 5, 1, -3};
  int size = sizeof(arr) / sizeof(arr[0]);
  sort(arr, size);

  for (int i = 0; i < size; i++)
  {
    printf("%d\n", arr[i]);
  }

  return 0;
}
