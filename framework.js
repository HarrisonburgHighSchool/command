const inquirer = require('inquirer');
const chalk = require('chalk');

var exports = module.exports = {};

exports.ask = async (question, input, prereq) => {
  if (input == prereq) {
    const answer = await inquirer.prompt(question);
    return answer;
  }
}

exports.print = function (message, mode) {
  console.log(
    chalk[mode](message)
  );
}
