function searchWords(word1, word) {
    let text = `My favorite fruit is grapes. 
    Because with grapes, you always get another chance.
    'Cause, you know, if you have a crappy apple or a peach,
    you're stuck with that crappy piece of fruit.
    But if you have a crappy grape,
    no problem - just move on to the next.
    'Grapes: The Fruit of Hope.'`;
    if (text.includes(word1)) {
        console.log(true);
    } else {
        console.log(false);
    }

    if (text.includes(word2, 50)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

let word1 = "apple";
let word2 = "grapes";
// Call the function here with the arguments
searchWords(word1, word2);