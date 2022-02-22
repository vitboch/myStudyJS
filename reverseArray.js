function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1 ; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

let arr = ['a', 'b', 'c', 'd'];

console.log(reverseArray(arr));