define(function(){
	function magglass(){
		
	/*var oMiddle = $('.middle').eq(0);
	var oMiddlePic = $('.middlePic').eq(0);
	var aSmall = $('.small');
	var oMaxPic = $('.maxPic').eq(0);
	var oFilter = $('.filter').eq(0);
	*/
	
	$('.small').mouseover(function(){
			var url1 = $(this).data('url');
			//console.log(url1)
       		$('.middlePic').eq(0).attr({src:url1});
        	$('.maxPic').eq(0).attr({src:url1});

	})
	
	$('.middle').mousemove(function(e){
		var x = e.pageX-$('.middle').eq(0).position().left-$('.filter').eq(0).width()/2;
        var y = e.pageY-$('.middle').eq(0).position().top-$('.filter').eq(0).height()/2;
		
        if(x<0){
            x = 0;
        }
        if(x>$('.middle').eq(0).width()-$('.filter').eq(0).width()){
            x = $('.middle').eq(0).width()-$('.filter').eq(0).width();
        }
        if(y<0){
            y = 0;
        }
        if(y>$('.middle').eq(0).height()-$('.filter').eq(0).height()){
            y = $('.middle').eq(0).height()-$('.filter').eq(0).height();
        }
        //蒙版层的位置
        $('.filter').eq(0).css("left",x);
        $('.filter').eq(0).css("top",y);
       
        //按比例大图的图像
        $('.maxPic').eq(0).css("left",-x*2);
       	$('.maxPic').eq(0).css("top",-y*2);
      
	})
	
	$('.middle').hover(function(){
			$('.maxPic').eq(0).css({"height":"800"});
			$('.max').eq(0).css({"height":"400"});
	},function(){
		$('.maxPic').eq(0).css({"height":"0"});
		$('.max').eq(0).css({"height":"0"});
	})
	
	}//magglass结束
	return magglass;
	
})//define结束