//定义函数
define(function(){
	
	function bannerLunbo(){
	
		$.getJSON('../data/lunbo.json',function(res){
			//console.log(res);
			
			var arr = res.data.map(function(obj){
				return `<li><a href=""><img src="${obj.imgUrl}"/></a></li>`
			})
			
			//console.log(arr.join(''))
			//将li插入到ul中
			$('.list').append(arr.join(''));
			
			lunbo();//因为异步的问题所以要在里面调用，否则获取不到数据
			
		})
		//因为是异步请求，所以轮播和数据请求会一起执行，然而数据还没有获取到，所以应该等数据加载完
		//lunbo();
	
	}//轮播结束括号
	//返回轮播
	return bannerLunbo;
})//定义define的结束标签



//轮播原理调用
function lunbo() {
	//console.log(2222)
	var timer = null;
	//添加移入移出事件
	$('.banner').hover(function() {
		//console.log(this); //this指向banner
		//滑过banner时，左右键才出现
		$('.direction').css({
			display: 'block'
		})
		clearInterval(timer);

		//移出时左右键消失
	}, function() {
		$('.direction').css({
			display: 'none'
		});
		autoPlay();
	})

	//获取到包裹图片的li
	var oLi = $('.list li');
	//console.log(oLi,5555)
	//console.log(oLi.length);//长度为7

	var leftBtn = $('.direction').find('.left');
	var rightBtn = $('.direction').find('.right');

	var index = 0;
	//调用自动轮播
	autoPlay();
	//cirShow(index);

	//点击左右键
	leftBtn.click(function() {
		index--;
		move();
	});

	rightBtn.click(function() {
		index++;
		move();
	});

	//封装自动轮播
	function autoPlay() {
		timer = setInterval(function() {
			index++;
			move();
			//console.log(333333)
		}, 3000);
	}

	//封装轮播原理
	function move() {
		if(index < 0) {
			index = oLi.size() - 1; //下标=图片长度-1
		}
		if(index >= oLi.size()) {
			index = 0;
		}

		//过滤当前li的下标，停止所有动画，添加动画透明度为1，其他兄弟元素停止动画，添加动画透明度为0
		oLi.eq(index).stop().animate({
			opacity: 1
		}).siblings().stop().animate({
			opacity: 0
		});
		//$('.circle a').removeClass('active').eq(index).addClass('active');
	
	}

	
	

}
