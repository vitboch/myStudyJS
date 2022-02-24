function searchArrayDivisibleBy11(numbers) {
    return numbers.find(e => e % 11 === 0);
}

let numbers = [1, 12, 55];

console.log(searchArrayDivisibleBy11(numbers));