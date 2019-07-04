module.exports = function getLoveTrianglesCount(preferences = []) {
  	var shiftArr = [0];
  	var count = 0;
  	for(var i = 0; i < preferences.length; i++){
  		shiftArr.push(preferences[i]);
  	}
  	
  	for(i = 1; i < shiftArr.length; i++){
  		var first = shiftArr[i];
  		if(first == i) continue;
  		var second = shiftArr[first];
  		var third = shiftArr[second];
  		if(third == i){
  			shiftArr[i] = 0;
  			shiftArr[first] = 0;
  			shiftArr[second] = 0;
  			count++;
  		}
  	}
  	
  	return count;

}

