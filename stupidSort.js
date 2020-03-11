function sortArray(array) {
    const arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {
        if (array[index] > array[index + 1]) {
            const tmp = array[index];
            array[index] = array[index + 1];
            array[index + 1] = tmp;
            index = 0;
        }
    }

    return array;
}

console.log(sortArray([1,3,6,5,2,7]));
