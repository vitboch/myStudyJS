let arr = ['red', 'green', 'blue'];

function upCase(str) {
    console.log(str.toUpperCase());
}

function arrayToUpperCase(arr) {
    arr.forEach(upCase);
}

arrayToUpperCase(arr);
