// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


const insertionSort = function(arr) {
    /*
     This logic assumes that first array's index is base number at first.(It is called 'sorted'?)
     So, this first loop start i=1.
    */
    for (let i = 1; i < arr.length; i++) { // first loop.
        let temp = arr[i]; // Escape the number because this number insert later.
        
        let j; // declare j variable here.(Using 'var' is possible, but I don't want to use it)
        for (j = i-1; j >= 0; j--) { // Compare array element value from right to left.
            if (arr[j] > temp) { // if 'arr[j]' is bigger than 'temp', 'arr[j]' slide to right.
                arr[j+1] = arr[j];
            } else {
                break; // if 'arr[j]' is not bigger than 'temp', break from second loop. And, insert temp variable in next step.
            }
        };
        arr[j+1] = temp; // Insert temp variable.
    };
    return arr; // return sorted array.

};

console.log(insertionSort(arr1));

console.log(insertionSort(arr2));
