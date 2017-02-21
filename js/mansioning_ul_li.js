
define(['jquery','mansioning'],function($,mansioning){
	$(function(){
		var mansioning_ul_li = function(){
			mansioning($("#mansionable-list"),"10px");
		};
		mansioning_ul_li();
		$(window).resize(mansioning_ul_li);
	});
});
