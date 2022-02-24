const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkElementIncludes(element) {
    return digits.includes(element);
}

let element = 5;

console.log(checkElementIncludes(element));