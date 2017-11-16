class Engine {

	constructor() {
		console.log('构造函数调用');
		console.log(this)
		//1-选择难度  选择后

		var that = this;


		//定义两个数组 存放所有的敌机 和 子弹
		this.enemies = [];
		this.bullets = [];


		this.logo = new Logo();

		this.op = new GameOptions(function(index) {

			console.log('用户点击了难度', index);
			console.log(that);
			console.log(this);

			that.loading = new Loading(function() {
				console.log('loading加载完毕，游戏开始')
				//that.logo.ele.style.display = 'none'
				that.logo.hide();

				that.scoreBoard = new ScoreBoard();
				//创建我方飞机
				that.myPlane =  new MyPlane(index);
				//创建敌机
				that.enemieShow();

				//不停的检测是否发生碰撞
				that.run();

			});

		}.bind(this));

		//		this.loading = new Loading();

		//2-loading 进度加载  
		//3-游戏开始

		//4- 创建我方飞机对象

		//5- 创建敌机 对象

		//6- 碰撞检测

		//7-积分版对象
		//8-武器加强

	}
	//敌机出现
	enemieShow() {
		console.log('开始出现敌机')
		var that = this;
		setInterval(function() {
			var tmp =  new SmallEnemy();
			that.enemies.push(tmp);
			
		}, 2000);
		setInterval(function() {
			var tmp = new MiddleEnemy();
			that.enemies.push(tmp);
		}, 5000);
		setInterval(function() {
			var tmp = new LargeEnemy();
			that.enemies.push(tmp);
		}, 20000);

	}

	//检测 子弹和敌机   敌机和我方飞机  不停的检测是否发生碰撞
	run() {
		var that = this;
		setInterval(function() {
			//检测 子弹和敌机   敌机和我方飞机
			//子弹和敌机  
			console.log('子弹个数',that.enemies.length,that.bullets.length)
			
			that.bullets.forEach(function(bullet){
				
				that.enemies.forEach(function(enemy){
					
					if(that.getCollision(bullet.ele,enemy.ele)){
						
//						bullet.ele.remove();
						bullet.boom();
						
						
						enemy.hurt(function(score){
							console.log('敌机爆炸',score);
							
							that.scoreBoard.unpdateScore(score);
							
						});
//						enemy.ele.remove();
						console.log(bullet,'发生碰撞')
					}
					
					
//					if(that.getCollision(enemy.ele,that.myPlane.ele)){
//						alert('游戏结束')
//						location.reload();
//					}
					
					
				})
				
			});
			
			
			
			
			

		}, 100)

	}

	//碰撞检测函数
	getCollision(obj1, obj2) {
		//参数为碰撞物体与被碰撞物体
		let l1 = obj1.offsetLeft; //左
		let r1 = obj1.offsetLeft + obj1.offsetWidth; //右
		let t1 = obj1.offsetTop; //上
		let b1 = obj1.offsetTop + obj1.offsetHeight; //下

		let l2 = obj2.offsetLeft; //左
		let r2 = obj2.offsetLeft + obj2.offsetWidth; //右
		let t2 = obj2.offsetTop; //上
		let b2 = obj2.offsetTop + obj2.offsetHeight; //下

		if(r1 < l2 || l1 > r2 || t1 > b2 || b1 < t2) {
			return false; //没有碰撞
		} else {
			return true;
		}
	}

}