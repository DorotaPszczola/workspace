// project 9.2

var femaleNames = ['Anna', 'Agnieszka', 'Anastazja', 'Aniela', 'Antonina'];
var maleNames = ['Antoni', 'Adam', 'Alfons', 'Albert'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) >=0 && allNames.indexOf(newName) < allNames.lenght) {
	alert("Name " +newName +"is already in the array on " +allNames.indexOf(newName) +" position.");
} else {
	allNames.push(newName)
}
console.log(allNames);