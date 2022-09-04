//This script fulfills the project reqs for "Secret Message" in Codecademy

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

console.log("The length of the array is " + secretMessage.length + " words long.");

secretMessage.push('to', 'Program');

console.log("The location of the word \"easily\" is index value " + secretMessage.indexOf('easily') +".");

const start = 7;
const deleteCount = 1;
secretMessage.splice(start, deleteCount, 'right');

secretMessage.shift();

secretMessage.unshift('Programming');

const startIndex = 6;
const numOfIndex = 5;
secretMessage.splice(startIndex, numOfIndex, 'know');

console.log("After executing the message modifications, the new message is as follows: "  + secretMessage.join(' '));
