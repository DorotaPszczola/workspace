// scripts.js

var a = prompt('Enter value for a');
var b = prompt('Enter value for b');
var value = ((a*a)+(2*a*b)-(b*b));
(value > 0) ? alert('The final value is ' + value + ' and the result is positive') : alert('The final value is ' + value + ' and the result is negative');
(value = 0) ? alert('The final value is equal to 0.') : alert('The final value is different from 0.');
