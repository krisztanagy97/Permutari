 var solutii = [];
 var intrare = [1, 2, 3];
 var elemente = Array(intrare.length);
 var solutie = Array(intrare.length);

function permutari(k) {
	   var i = 0;
	   if (k == intrare.length) {
		        return solutii.push(solutie.slice());
		      } else {
			           for (var i = 0; i < intrare.length; i++) {
					          if (!elemente[i]) {
							           elemente[i] = true;
							           solutie[k] = intrare[i];
							           permutari(k + 1);
							           elemente[i] = false;
							         }
					        }
			         }
	 }
permutari(0);

 for(var j = 0; j < solutii.length; j++){
	    console.log(solutii[j]);
	    }
