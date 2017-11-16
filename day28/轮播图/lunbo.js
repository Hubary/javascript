function lunbo(className){
	
	
		var oBanner = document.querySelector('.'+className);
		
	var oUl = oBanner.querySelector('.list');
	var aLi = oUl.getElementsByTagName('li')
	var circle = oBanner.querySelector('.circle');
	var aA = circle.getElementsByTagName('a');
	
	console.log(aA.length)
	
	var dir = oBanner.querySelectorAll('.direction>a');
	var iNow = 0;
	//克隆第一个li
	var li = oUl.children[0].cloneNode(true)
	oUl.appendChild(li);
	var timer;

	autoPlay();
	//自动执行函数
	function autoPlay() {
		timer = setInterval(function() {
			//
			if(iNow >= aLi.length - 1) {
				iNow = 1;
				oUl.style.left = 0;
			} else {
				iNow++;
			}
			onImg();
		}, 1000)
	}

	//小圆点点击事件
	for(let i = 0; i < aA.length; i++) {
		aA[i].onclick = function() {
			iNow = i;
			onImg();
		}
	}
	//滑入事件
	oBanner.onmouseover = function() {
		clearInterval(timer)
	}
	//滑出事件
	oBanner.onmouseout = function() {
		autoPlay();
	}
	//上一个
	dir[0].onclick = function() {
		if(iNow <= 0) {
			iNow = aLi.length - 2;
			//当iNow等于0时，再执行上一个，就让oUL瞬间先移到最后一个，再去执行函数(倒数第二个的位移)
			oUl.style.left = -(aLi.length - 1) * aLi[0].offsetWidth + "px";
		} else {
			iNow--;
		}

		onImg();
	}
	//下一个
	dir[1].onclick = function() {
		if(iNow >= aLi.length - 1) {
			iNow = 1;
			oUl.style.left = 0;
		} else {
			iNow++;
		}
		onImg();
	}

	function onImg() {
		
		move(oUl, {
			"left": -iNow * aLi[0].offsetWidth
		});
		//让每一个小圆点都没有样式
		for(var i = 0; i < aA.length; i++) {
			aA[i].className = "";
		}
		//判断要是下标为4的给下标为0的加样式
		
		if(iNow == aA.length) {
			aA[0].className = "active";
			
		}else{
			aA[iNow].className = "active"
		}
		console.log(iNow,aA.length)
		
		
	}
}
