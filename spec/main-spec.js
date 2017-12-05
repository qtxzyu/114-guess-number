const main = require('../main/main');

describe('main()', () => {
	it ('input has one right number but position is wrong', () => {
		var input = '5167';
		var result = main(input);
		expect(result).toEqual('0A1B');
	});
	
	it ('input has one right number and position is right', () => {
		var input = '1567';
		var result = main(input);
		expect(result).toEqual('1A0B');
	});
	
	it ('all the numbers and positions are right', () => {
		var input = '1234';
		var result = main(input);
		expect(result).toEqual('4A0B');
	});
	
	it ('all the numbers and positions are wrong', () => {
		var input = '5678';
		var result = main(input);
		expect(result).toEqual('0A0B');
	});
});