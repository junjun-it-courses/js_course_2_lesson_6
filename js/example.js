function sumOfArrayElements(arr) {
    let sum = 0;

    for(let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i] ** 2;
    }

    return sum;
}

let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [60, 70, 80, 90, 100];
let numbers3 = [110, 120, 130, 140, 150];


let res1 = sumOfArrayElements(numbers1);
let res2 = sumOfArrayElements(numbers2);
let res3 = sumOfArrayElements(numbers3);

let newArr = [res1, res2, res3];

let res4 = sumOfArrayElements(newArr);
console.log(newArr);
console.log(res4);

// console.log(res1)
// console.log(res2)
// console.log(res3)