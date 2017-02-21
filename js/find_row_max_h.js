
define(function(){
	var find_row_max_h = function(twoD_i){
		var size = twoD_i.length, i = 1, max = twoD_i[0];
		for(;i<size;i++){
			if(max<twoD_i[i]){
				max = twoD_i[i];
			}
		}
		return max;
	}
	return find_row_max_h;
});
