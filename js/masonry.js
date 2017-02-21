/*
Author: Amachree Tamunoemi T.
E-mail: emiglobetrotting@yahoo.co.uk
*/
define(['jquery','strippx','split_into_2d','find_row_max_h'],function($,strippx,split_into_2d,find_row_max_h){
	
	var masonry = function($mainlist,$top_in_px){
		$list = $mainlist;
		$lis = [];
		$li_list = $list.children();
		$li_list.each(function(){
			$li = $(this);
			$li.css("margin-top",$top_in_px);
			$lis.push($li);
		});
		$list.css("width","100%");
		$li_top = strippx($lis[0].css("margin-top"));
		$li_width = strippx($lis[0].css("width"));
		$container_width = strippx($list.css("width"));
		$li_per_row = Math.floor($container_width/$li_width);

		if($li_per_row==0) $li_per_row = 1;
		$twoDs = split_into_2d($lis,$li_per_row);
		$twoD_objects = $twoDs[0];
		$twoD_heights = $twoDs[1];
		$size = $twoD_heights.length;
		$j = 1;
		
		var find_top = function($height_above,$row_max_h_1){
			$margin_top = 0;
			$max_height_above = $row_max_h_1;
			$gap_above = $max_height_above - $height_above;
			if($gap_above>$li_top)
				$margin_top = -1*($gap_above-$li_top);

			return $margin_top;
		};
		
		var update_neg_margintop_li_height = function($twoD_heights_j,$twoD_objects_j){
			$sze = $twoD_heights_j.length;
			$m = 0;
			$arr = $twoD_heights_j;
			for(;$m<$sze;$m++){
				$t = strippx($twoD_objects_j[$m].css("margin-top"));
				$h = strippx($twoD_objects_j[$m].css("height"));
				if($t<0){
					$arr[$m] = (($h+$t)-strippx($top_in_px));
				}
			}
			return $arr;
		};
		
		var resizer = function(){
			if($li_per_row>1){
				for(;$j<$size;$j++){
					$k = 0;
					$size1 = $twoD_heights[$j].length;
					$twoD_heights[$j-1] = update_neg_margintop_li_height($twoD_heights[$j-1],$twoD_objects[$j-1]);
					$row_max_h = find_row_max_h($twoD_heights[$j-1]);
					for(;$k<$size1;$k++){
						$margin_top = find_top($twoD_heights[$j-1][$k],$row_max_h);
						if($margin_top<0){
							$twoD_objects[$j][$k].css("margin-top",$margin_top+"px");
						}
					}
				}
			}
		};
		resizer();
	};
	return masonry;
});
