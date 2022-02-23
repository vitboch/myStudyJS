function ReturnIndexArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            return i;
        }
    }
    return -1;
}

let arr = [ 1, 2, 3 ];


console.log(ReturnIndexArray(arr))