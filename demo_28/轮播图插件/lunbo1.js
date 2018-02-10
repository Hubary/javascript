function Lunbo(className) {

	//无缝轮播 需要在尾部添加一张图片（跟第一张一样的）
	this.box = document.getElementsByClassName(className)[0];
	this.ul = this.box.getElementsByClassName('item')[0];
	this.lis = this.ul.getElementsByTagName('li');
	this.page = this.box.getElementsByClassName('page')[0];
	this.pages = this.page.getElementsByTagName('li');
	this.imgsNum = this.lis.length;

	//轮播图当前页码
	this.pageNum = 0;

	this.rightBtn = document.getElementsByClassName('rightBtn')[0];
	this.leftBtn = document.getElementsByClassName('leftBtn')[0];

	//         	var lastLi = document.createElement('li');
	//         	var img = document.createElement('img');
	//         	img.src = lis[0].children[0].src;
	//         	lastLi.appendChild(img);
	//         	ul.appendChild(lastLi);
	var that = this;

	


	this.init();

}



	//无缝轮播需要在尾部添加一张图片
	Lunbo.prototype.addPic = function() {
		var that = this;
		var lastLi = this.lis[0].cloneNode(true); //参数 true  复制整个节点
		this.ul.appendChild(lastLi);
	}
	
	
	
	Lunbo.prototype.addBtnEvent = function() {
		console.log(this);//轮播对象
		var that = this;
		
		
		
		this.rightBtn.onclick = function() {
			console.log(that);//按钮
			that.pageNum++;
			that.play();//根据页码， 做轮播

		}

		this.leftBtn.onclick = function() {

			that.pageNum--;
			that.play();

		}
	}

	Lunbo.prototype.addAutoPlay = function() {
		var that = this;
		var timer1 = this.autoPlay();
		//停止自动播放
		this.box.onmouseenter = function() {
			clearInterval(timer1)
		}
		this.box.onmouseleave = function() {
			timer1 = that.autoPlay();
		}
	}

	//小圆点
	//pageNum

	Lunbo.prototype.pageEvent = function() {
		var that = this;
		for(var i = 0; i < this.pages.length; i++) {
			this.pages[i].index = i;
			this.pages[i].onclick = function() {
				//this.index;
				that.pageNum = this.index;
				that.play();
			}
		}

	}

	//自动播放
	 Lunbo.prototype.autoPlay = function() {
	 	var that = this;
		var timer = setInterval(function() {
			that.pageNum++;
			that.play();
		}, 2000);
		return timer;
	}

	Lunbo.prototype.play= function() {
		var that = this;
		if(this.pageNum == this.imgsNum + 1) {
			//瞬间改变  ul 的坐标
			this.ul.style.left = 0 + 'px';
			this.pageNum = 1;
		}
		if(this.pageNum == -1) {
			//瞬间改变  ul 的坐标
			this.ul.style.left = -590 * this.imgsNum + 'px';
			this.pageNum = this.imgsNum - 1;
		}

		animate(this.ul, { left: -590 * this.pageNum });

		for(var i = 0; i < this.pages.length; i++) {
			this.pages[i].style.background = 'red'
		}
		if(this.pageNum == this.imgsNum) {
			this.pages[0].style.background = 'white';
		} else {
			this.pages[this.pageNum].style.background = 'white';
		}

	}



	//init 初始化方法
	Lunbo.prototype.init = function() {
		var that = this;
		console.log(this)
		this.addPic();//
		this.pages[this.pageNum].style.background = 'white';
		
		this.addBtnEvent();//
		this.addAutoPlay(); //自动播放
		this.pageEvent();

	}