class Lunbo {
	constructor(calssName) {
		//
		this.init(calssName);
		//
		this.autoPlay();
		//
		this.pagesEvent();
		//
		this.autoPlayControl();
		//
		this.addBtnEvent();
	}

	autoPlayControl() {
		//滑入事件
		this.oBanner.onmouseover = function() {
			clearInterval(this.timer)
		}.bind(this);
		//滑出事件
		this.oBanner.onmouseout = function() {
			this.autoPlay();
		}.bind(this)
	}

	pagesEvent() {
		//小圆点点击事件
		for(let i = 0; i < this.aA.length; i++) {
			this.aA[i].onclick = function() {
				this.iNow = i;
				this.onImg();
			}.bind(this)
		}
	}

	addBtnEvent() {
		//上一个
		this.dir[0].onclick = function() {
			if(this.iNow <= 0) {
				this.iNow = this.aLi.length - 2;
				//当iNow等于0时，再执行上一个，就让oUL瞬间先移到最后一个，再去执行函数(倒数第二个的位移)
				this.oUl.style.left = -(this.aLi.length - 1) * this.aLi[0].offsetWidth + "px";
			} else {
				this.iNow--;
			}

			this.onImg();
		}.bind(this);
		//下一个
		this.dir[1].onclick = function() {
			if(this.iNow >= this.aLi.length - 1) {
				this.iNow = 1;
				this.oUl.style.left = 0;
			} else {
				this.iNow++;
			}
			this.onImg();
		}.bind(this);

	}

	init(className) {
		this.oBanner = document.querySelector('.' + className);

		this.oUl = this.oBanner.querySelector('.list');
		this.aLi = this.oUl.getElementsByTagName('li')
		this.circle = this.oBanner.querySelector('.circle');
		this.aA = this.circle.getElementsByTagName('a');
		this.dir = this.oBanner.querySelectorAll('.direction>a');
		this.iNow = 0;
		//克隆第一个li
		this.li = this.oUl.children[0].cloneNode(true)
		this.oUl.appendChild(this.li);
		this.timer;
	}

	autoPlay() {
		var that = this;
		this.timer = setInterval(function() {
			//
			if(that.iNow >= that.aLi.length - 1) {
				that.iNow = 1;
				that.oUl.style.left = 0;
			} else {
				that.iNow++;
			}
			that.onImg();
		}, 1000)
	}

	onImg() {

		move(this.oUl, {
			"left": -this.iNow * this.aLi[0].offsetWidth
		});
		//让每一个小圆点都没有样式
		for(var i = 0; i < this.aA.length; i++) {
			this.aA[i].className = "";
		}
		//判断要是下标为4的给下标为0的加样式

		if(this.iNow == this.aA.length) {
			this.aA[0].className = "active";

		} else {
			this.aA[this.iNow].className = "active"
		}

	}

}