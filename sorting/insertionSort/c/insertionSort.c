#include <stdio.h>
#include <stdlib.h>

void mySwap(int arr[], int idx1, int idx2)
{
  int temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

void sort(int arr[], int size)
{
  for (int i = 1; i < size; i++)
  {
    int j = i;
    while (j > 0 && arr[j] < arr[j - 1])
    {
      mySwap(arr, j, j - 1);
      j--;
    }
  }
}

int main()
{
  printf("Start\n");
  int arr[5] = {3, 2, 5, 1, 0};
  int size = sizeof(arr) / sizeof(arr[0]);

  sort(arr, size);

  for (int i = 0; i < size; i++)
  {
    printf("%d\n", arr[i]);
  }

  return 0;
}
