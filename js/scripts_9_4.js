// project 9.4

/* function drawTree(h) {
	
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

drawTree(5) */

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