 // Question 3
 function quickSort(arr) {
    if (arr.length <= 1) {
    return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
    continue;
    }
    if (arr[i] < pivot) {
    left.push(arr[i]);
    } else {
    right.push(arr[i]);
    }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
    }
    const arr= [5, 3, 7, 2, 9, 1, 6, 4, 8];
     sortedArray = quickSort(arr);
    console.log("Sorted array:", sortedArray);
   
//5. Write a JavaScript program to sort a list of elements using Heap sort.
function heapSort(arr) {
buildMaxHeap(arr);
for (let i = arr.length - 1; i > 0; i--) {

swap(arr, 0, i);
heapify(arr, 0, i);
}
return arr;
}
function buildMaxHeap(arr) {
const mid = Math.floor(arr.length / 2);
for (let i = mid; i >= 0; i--) {
heapify(arr, i, arr.length);
}
}
function heapify(arr, i, max) {
let largest = i;
const left = 2 * i + 1;
const right = 2 * i + 2;
if (left < max && arr[left] > arr[largest]) {
largest = left;
}
if (right < max && arr[right] > arr[largest]) {
largest = right;
}
if (largest !== i) {
swap(arr, i, largest);
heapify(arr, largest, max);
}
}
function swap(arr, i, j) {
const temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
const unsortedArray = [5, 3, 7, 2, 9, 1, 6, 4, 8];
const sortedArray = heapSort(unsortedArray);
console.log("Sorted array using Heap Sort:", sortedArray);
