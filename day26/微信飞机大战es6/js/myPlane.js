class MyPlane extends Spirit {
	constructor(options) {
		super();//继承 必须要先调用  父类的构造函数
		console.log(this.ele);
		
		//记录游戏的难度
		this.options = options;

		this.init();
		this.run();
		this.fire();

	}
	//初始化丰富

	init() {
		this.ele.className = 'my-warplain';
		document.body.appendChild(this.ele);

		var myPlaneY = document.body.clientHeight - this.ele.offsetHeight;
		var myPlaneX = (document.body.clientWidth - this.ele.offsetWidth) / 2;
		console.log(myPlaneY)
		this.ele.style.top = myPlaneY + 'px';
		this.ele.style.left = myPlaneX + 'px';
	}
	//我方飞机移动
	run() {
		//飞机跟着鼠标移动

		document.onmousemove = function(e) {
			var evt = e || window.event;
			//					console.log(e.clientX, e.pageX);

			this.ele.style.top = e.clientY - this.ele.offsetHeight / 2 + 'px';
			this.ele.style.left = e.clientX - this.ele.offsetWidth / 2 + 'px';

		}.bind(this);

	}

	//开火
	fire(){
		
		
		//每隔300发射一颗子弹
		setInterval(function(){
			var x= this.ele.offsetLeft;
			var y = this.ele.offsetTop;
			var width = this.ele.offsetWidth ;
			
			//
			var tmp =  new Bullet(x,y,width,this.options);
			en.bullets.push(tmp);
			
		}.bind(this),1000);
		
	}

}