var sentenceOne = prompt("Describe yourself in a sentence")
console.log(sentenceOne)

var letter1 = sentenceOne.substring(0, 1).toUpperCase();
var lastletter = sentenceOne.substring(sentenceOne.length - 1).toUpperCase();
var newWord = letter1 + sentenceOne.substring(1, sentenceOne.length - 1) + lastletter;
console.log(newWord)

var reverse = lastletter + letter1;
console.log(reverse);



var newSentence = sentenceOne + reverse;
console.log(newSentence);

var middle = sentenceOne.charAt((sentenceOne.length / 2).toFixed());
console.log(middle);


var sentenceTwo = middle + sentenceOne;
console.log(sentenceTwo);

var sentenceThree = function reverse(sentenceTwo) {
    return sentenceTwo.split('').reverse().join('')
}
var result = sentenceThree(sentenceTwo)
console.log(result)

function AlertOne(){
alert(sentenceTwo)    
}
