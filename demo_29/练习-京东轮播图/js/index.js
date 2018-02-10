$(function() {

	//callback=jsonpCallbackFocus

	var url = 'https://f.3.cn/bi/focus8/get?callback=?&pin=&uuid=14931815996541893119345&_=1498183453917'

	$.getJSON(url, function(res) {
		console.log(res);

		var oUl = $('.jdlb-imglist');
		var page = $('.jdlb-page');
		for(var i = 0; i < res.data.length; i++) {
			// <!--<li><a href="javascript:;"><img src="images/1.jpg" alt=""></a></li>-->
			var productArray = res.data[i];
			if(productArray == null) {
				continue;
			}

			console.log(productArray);

			var src = productArray[0].src;
			var href = productArray[0].href;

			var html = `<li><a href="${href}"><img src="${src}" alt=""></a></li>`;
			oUl.append(html);

			var pageA = $('<a href="javascript:;"></a>');

			page.append(pageA)

		}

		jdlb();
	});
});

function jdlb() {
	var timer = null;

	//添加 事件

	$('.box').hover(function() {
		console.log(this)
		$('.jdlb-direction').css({
			display: 'block'
		});
		clearInterval(timer);
	}, function() {
		$('.jdlb-direction').css({
			display: 'none'
		});
		autoplay();
	})

	var oLis = $('.jdlb-imglist li');
	console.log(oLis.length)

	var leftBtn = $('.jdlb-direction').find('.left-btn')
	var rightBtn = $('.jdlb-direction').find('.right-btn')

	var index = 0;
	pageShow(index)
	autoplay();

	leftBtn.click(function() {
		index--;
		move();
	});
	rightBtn.click(function() {
		index++;
		move();

	})

	function move() {
		if(index < 0) {
			index = oLis.size() - 1;
		}
		if(index >= oLis.size()) {
			index = 0;
		}
		pageShow(index);
		oLis.eq(index).stop().animate({
			opacity: 1
		}).siblings().stop().animate({
			opacity: 0
		})
	}

	function pageShow(index) {
		$('.jdlb-page a').removeClass('active').eq(index).addClass('active')
	}

	function autoplay() {
		timer = setInterval(function() {
			rightBtn.trigger('click')

		}, 2000)
	}

}