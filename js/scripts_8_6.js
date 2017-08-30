// scripts.js

var a = prompt('Enter value for a');
var b = prompt('Enter value for b');
var value = ((a*a)+(2*a*b)-(b*b));
if (value > 0) {
	alert('The final value is ' + value + ' and the result is positive')
	} else if  (value < 0 ) { 
		alert('The final value is ' + value + ' and the result is negative')
	} else { 
		alert('The final value is equal to 0.') }
