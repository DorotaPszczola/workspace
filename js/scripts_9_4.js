
// project 9.4

// basic version 

function drawTree(h) {
	for (var i = 0 ; i < h ; i++) {
		var star = "";
		for (var j = 0 ; j <= i ; j++ ) {
			star += '*';
		}
		console.log(star);	
	}
}
drawTree(5)

// advanced version

function drawTree(h) {
	for (var i = 0 ; i < h ; i++) {
		var star = "";
		var space = "";
		
		var g = h - i
		for (var k = g ; g > 0 ; g-- ) {
			space += ' ';
			}
		for (var j = 0 ; j <= i ; j++ ) {
			star += '*';
			}

		star1 = star.substring(0,star.length-1 );
		var halfTree = space.concat(star);
		var tree = halfTree.concat(star1);
		console.log(tree); 

	}
}
drawTree(5)




// tree with h segments made of h rows of stars

function drawTree(h) {
	
	for (var i = 1 ; i <= h ; i++) {
		var star = "*";
		
		for (var j = 0 ; j <= i ; j++ ) {
			var g = h - j
			space = "";

			for (var k = g ; g > 0 ; g-- ) { 
				space += ' ';
				
			}

			
			var tree = space.concat(star);
			console.log(tree); 
			star += '**';

		}
	}
}

drawTree(5)