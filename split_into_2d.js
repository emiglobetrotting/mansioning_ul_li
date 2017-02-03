
define(['strippx'],function(strippx){
	var split_into_2d = function(list,col_size){
		var i = 0,
		j = 0,
		twoD_obj = [],
		twoD_height = [],
		size = 0,
		list_size = list.length;
		for(;i<list_size;i++){
			try{
				size = twoD_obj[j].length;
			}
			catch(e){
				twoD_obj[j] = [];
				twoD_height[j] = [];
			}
			twoD_obj[j].push(list[i]);
			twoD_height[j].push(strippx(list[i].css("height")));
			if((i+1)%col_size==0){
				j++;
			}
		}
		return [twoD_obj,twoD_height];
	};
	return split_into_2d;
});
