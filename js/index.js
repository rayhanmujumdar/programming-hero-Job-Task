// task: 1 -> Create a function that will find the factorial number of [9] using recursion.
// f(n-1) + n = f(n)

function sum(n){
    if(n === 0){
        return 0;
    }else{
        return sum(n-1) + n;
    }
}
console.log(sum(9))
/* 
work example: how it work
sum(4)
sum(4-1) + 4
sum(3-1) + 3 + 4
sum(2-1) + 2 + 3 + 4
sum(1-1) + 1 + 2 + 3 + 4
0 + 1 + 2 + 3 + 4

warning: recursion is not a optimized solution and not recommend because if i call this function and n = 100000 this return a error  Maximum call stack size exceeded.
because call stack is fulled.that's why this is not recommended
*/

// task: 2 -> Find the maximum number in a jagged array given below array of numbers?

var arr = [2, 4, 10, [12, 40, [100, 99], 4],
    [3, 2, 99], 0
];

const largestNumber = function(arr){
    const ArrayNumber = []
    const subArrayNumber = []
    let innerSubArrayNumber = []
    for(let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++){
        if(Array.isArray(arr[arrayIndex])){
            for(let subArray = 0; subArray < arr[arrayIndex].length;subArray++){
                if(Array.isArray(arr[arrayIndex][subArray])){
                    innerSubArrayNumber = [...arr[arrayIndex][subArray]]
                }else{
                    subArrayNumber.push(arr[arrayIndex][subArray])
                }
            }
        }else{
            ArrayNumber.push(arr[arrayIndex])
        }
    }
    const allNumberOfArray = ArrayNumber.concat(subArrayNumber, innerSubArrayNumber)
    const maxNumberInArray = Math.max(...allNumberOfArray)
    return maxNumberInArray
}
console.log(largestNumber(arr))


// task: 3 -> Find the counts of duplicates in an array?

const arr2 = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
const duplicatesCount = function(arr) {
    const duplicate = []
    for(let arrayIndex = 0;arrayIndex < arr.length;arrayIndex++)
    {
        if(arr.indexOf(arr[arrayIndex]) !== arrayIndex){
            duplicate.push(arr[arrayIndex])
        }
    }
    return {
        duplicate,
        duplicateCount: duplicate.length
    }
}
console.log(duplicatesCount(arr2))

// task: 3 -> How to find unique values from an array in sorted order?

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]

