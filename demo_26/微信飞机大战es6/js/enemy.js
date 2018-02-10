class Enemy extends Spirit {
	constructor() {
		super();
		this.hp = 0;
		this.boomImgArray = [];
		this.score = 0;

		console.log('创建了敌机', this)

		document.body.appendChild(this.ele)
		//		this.run();

	}

	//飞机运动
	run() {
		//offsetWidth 可视区域
		console.log('飞机运动', this.ele.offsetWidth);

		//初始化飞机的位置
		var body_main = document.getElementById('body_main');
		var leftS = body_main.offsetLeft;
		var ringhtS = body_main.offsetLeft + body_main.offsetWidth - this.ele.offsetWidth;
		var enemyX = randomInt(leftS, ringhtS);
		var enemyY = -this.ele.offsetHeight;
		this.ele.style.left = enemyX + "px";
		this.ele.style.top = enemyY + 'px';

		var timer = setInterval(function() {

			this.ele.style.top = this.ele.offsetTop + 10 + 'px';

			if(this.ele.offsetTop >= document.body.clientHeight) {

				this.ele.remove();
				clearInterval(timer);
				console.log(en.enemies);
				//超出屏幕 需要把数组中的对象删掉
				//en.enemies    this;
				var index = en.enemies.indexOf(this);
				en.enemies.splice(index, 1);
			}

		}.bind(this), 100);
		this.timer = timer;

	}

	hurt(callback) {
		this.hp--;
		if(this.hp <= 0) {
			
			this.boom();
			callback(this.score);
		}
	}

	boom() {
		
		var that = this;

		var i = 0;
		clearInterval(this.timer);//让敌机停止运动
		var index = en.enemies.indexOf(this);
		en.enemies.splice(index,1);
		
		var timer = setInterval(function() {
			var imgName = that.boomImgArray[i];
			that.ele.style.background = `url(images/${imgName}) no-repeat`;
			i++;
			if(i == that.boomImgArray.length) {
				clearInterval(timer);
				that.ele.remove();
				

			}

		}, 100);
	}

}

class SmallEnemy extends Enemy {
	constructor() {
		super();
		this.ele.className = 'enemy-small';
		this.hp = 1;
		this.boomImgArray = ['plane1_die1.png', 'plane1_die2.png', 'plane1_die3.png'];
		this.score = 1;
		this.run();
		//		console.log(this.ele.offsetWidth)
	}

}
class MiddleEnemy extends Enemy {
	constructor() {
		super();
		this.ele.className = 'enemy-middle';
		this.hp = 3;
		this.boomImgArray = ['plane2_die1.png', 'plane2_die2.png', 'plane2_die3.png', 'plane2_die4.png']
		this.score = 3;
		this.run();
	}

}
class LargeEnemy extends Enemy {
	constructor() {
		super();
		this.ele.className = 'enemy-large';
		this.hp = 8;
		this.score = 8;
		this.boomImgArray = ['plane3_die1.png', 'plane3_die2.png',
			'plane3_die3.png', 'plane3_die4.png',
			'plane3_die5.png', 'plane3_die6.png'
		]

		this.run();
	}

}