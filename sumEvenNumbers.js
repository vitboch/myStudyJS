function sumEvenNumbers(a) {
    let x = 0;
    let b = 2;
    while (b <= a) {
        if (b % 2 === 0) {
            x += b;
        }
        b += 1;
    }
    return x;
}

console.log(sumEvenNumbers(10));