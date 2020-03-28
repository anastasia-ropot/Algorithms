function shakerSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let swap = true;

    while (swap) {
        swap = false;

        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                let swap = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swap;
                swap = true;
            }
        }

        right--;

        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                let swap = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = swap;
                swap = true;
            }
        }

        left++;
    }

    return arr;
}

console.log(shakerSort([1,6,3,2,5,9]));
