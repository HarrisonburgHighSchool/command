const framework = require('./framework.js'); //This line imports the code scaffolds I wrote to help streamline this activity.


// This is a data structure! It tells the program what question to ask, and how to store the response.
// Add more of these to add more questions to your program
const question = [
	{
    name: 'name',
    message: 'What is your name?',
  },
];


async function run() {



  //This is where the code runs. Add to this to make your program longer.
  let answer = await framework.ask(question);
  framework.print('hello, ' + answer.name, 'blue');




}


run(); //Don't change this part! This line is what tells the computer to run your program.