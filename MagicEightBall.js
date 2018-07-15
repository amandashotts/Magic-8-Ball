// Enter your name here (option, ternary operator in case this is left blank):
var userName = 'Amanda';
// Enter the question you would like to know the magic answer to!
var userQuestion = 'Will I take over the world today?'


userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
console.log(`${userName} finally thinks of a question! The question is: "${userQuestion}"`)

var randomNumber = Math.floor(Math.random() *8);

var eightBall = ['It is certain',
'It is decidedly so',
'Reply hazy try again later',
'Trust your instincts',
'Do not count on it',
'My sources say no',
'The outlook is not so great',
'Signs point to yes']
let yourFortune = eightBall[randomNumber];

console.log(`The magic eight ball has spoken! The answer to enlightenment is: ${yourFortune}..`);