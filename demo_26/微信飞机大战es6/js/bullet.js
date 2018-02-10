class Bullet extends Spirit {
	constructor(x, y, width, options) {
		//参数为 飞机的x y 坐标 和 宽度

		console.log('创建了一个子弹');
		super();

		this.x = x;
		this.y = y;
		this.width = width;
		this.options = options;

		this.init();
		this.run();

	}

	init() {

		this.ele.className = 'bullet';
		document.body.appendChild(this.ele);

		//子弹的初始位置
		this.ele.style.top = this.y - this.ele.offsetHeight + 'px';
		this.ele.style.left = this.x + this.width / 2 - this.ele.offsetWidth / 2 + 'px';

	}
	//子弹运动
	run() {

		//
		var timer = setInterval(function() {

			// i 控制游戏难度
			this.ele.style.top = this.ele.offsetTop - 10 - this.options * 2 + "px";
			//子弹超出屏幕 删除子弹

			if(this.ele.offsetTop <= -this.ele.offsetHeight) {
				this.ele.remove();
				clearInterval(timer);

				var index = en.bullets.indexOf(this);
				console.log("子弹超出屏幕 删除子弹", index);
				en.bullets.splice(index, 1);

			}

		}.bind(this), 100);
		this.timer = timer;

	}

	//子弹爆炸
	boom() {
		this.ele.className = 'bullet_die';
		var that = this;
		clearInterval(this.timer);
		
		var index = en.bullets.indexOf(this);
		console.log("子弹超出屏幕 删除子弹", index);
		en.bullets.splice(index, 1);
		
		setTimeout(function() {

			this.ele.style.background = 'url(images/die2.png) no-repeat';
			this.ele.remove();

			

		}.bind(this), 200)

	}
}