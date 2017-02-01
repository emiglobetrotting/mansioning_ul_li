
define(['jquery','mansioning'],function($,mansioning){
	$(function(){
		var resizer = function(){
			mansioning($("#mansionable-list"),"7px");
		};
		resizer();
		$(window).resize(resizer);
	});
});