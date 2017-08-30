// project 9.1

function getTriangleArea(a, h) {
	if (a <= 0) {
		alert('Wrong number. "a" must be bigger than 0')
	} 
	if (h <= 0) {
		alert('Wrong number. "h" must be bigger than 0')
	} 
	return (a*h/2)
}
console.log( getTriangleArea(10,6) )

	var triangle1Area = getTriangleArea(10, 15);