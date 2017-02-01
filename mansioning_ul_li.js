
define(['jquery','mansioning'],function($,mansioning){
	$(function(){
		var mansioning_ul_li = function(){
			mansioning($("#mansionable-list"),"7px");
		};
		mansioning_ul_li();
		$(window).resize(mansioning_ul_li);
	});
});
