
define(function(){
	var strippx = function(param){
		var data = param;
		try{
			data = parseInt(param);
		}
		catch(e){
			data = parseInt(param.substring(0,param.length-2));
		}
		return data;
	};
	return strippx;
});