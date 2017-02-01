'use strict'

function Calculator() {

	this.operations = {
		'+' : function(a, b) {
			return a + b;
		},
		'-' : function(a, b) {
			return a - b;
		}
	};

	this.addMethod = function(char, func) {
		this.operations[char] = func;
	};

	this.calculate = function(str) {
		var operationAsArray = str.split(' ');

		var firstOperand = +operationAsArray[0];
		var secondOperand = +operationAsArray[2];
		var operator = operationAsArray[1];

		return this.operations[operator](firstOperand, secondOperand); 
	};
}

/*
var calc1 = new Calculator();
console.log( calc1.calculate('10 + 11') );

powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
*/
