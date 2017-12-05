// Write your cade below:
var readline = require('readline');
function main() {
	let answer = getRandomString();
	//console.log('answer: ' + answer);
	getInputString(answer);
};

function getInputString(answer) {
	rl = readline.createInterface(process.stdin, process.stdout);
	rl.setPrompt('OHAI> ');
	rl.prompt();
	rl.on('line', function(line) {
		let result = getOutputString(line.trim(), answer);
		switch(result) {
			case '4A0B':
			console.log('Congratulation, the answer is `' + line.trim() + '`');
			rl.close();
			break;
			default:
			console.log('The return string is `' + result + '`' + '\n' + 'continue to guess');
			break;
		}
	rl.prompt();
	}).on('close', function() {
		console.log('Have a great day!');
		process.exit(0);
	});
}

function getOutputString(input,answer) {
	let numOfA = 0;
	let numOfB = 0;
	for (let i = 0; i < input.length; i++) {
		if(answer.indexOf(input.charAt(i)) > -1) {
			if(answer.indexOf(input.charAt(i)) === i) {
				numOfA++;
			} else {
				numOfB++;
			}
		}
	}
	return numOfA + 'A' + numOfB + 'B';
}

function getRandomString() {
    let answer = '';
    for(let i = 0; i < 4; i++){
		while (true) {
			let randomNum = Math.floor(Math.random() * 10);
			if(answer.indexOf(randomNum) === -1){
				answer += randomNum;
				break;
			}
        }
	}
    return answer;
}

module.exports = main

main();