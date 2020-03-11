function sortArray(array) {
    let arrayLength = array.length;
    let swap = true;

    while(swap) {
        swap = false;

        for (let index = 0; index < arrayLength; index++) {
            if (array[index] > array[index + 1]) {
                const tmp = array[index];
                array[index] = array[index + 1];
                array[index + 1] = tmp;
                swap = true;
            }
        }

        arrayLength--;
    }

    return array;
}

console.log(sortArray([1,6,3,2,5,9]));
