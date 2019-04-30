const readline = require('readline');
const ValidCheck = require('./validCheck');
const Todo = require('./todo.js');
const todoList = require('./data.js');
const Log = require('./log.js');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.setPrompt('명령하세요 : ');

rl.prompt();

const myLog = new Log();
const myTodo = new Todo(todoList, rl);

rl.on('line', input => {
	sendCommand(input);
});

const sendCommand = input => {
	const myValidCheck = new ValidCheck(myTodo, myLog);
	myValidCheck.parseCommand(input);
};