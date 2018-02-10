class Loading{
	constructor(callback){
		console.log('创建Loading对象 ');
		
		this.ele = document.createElement('div');
		this.ele.className = 'loading';
		this.interval = 3000;
		
		document.body.appendChild(this.ele);
		
		var that = this;
		
		var i=1;
		var timer =  setInterval(function(){
			//this;  es5  window  ，  es6 undefined
			i++;
			if(i==4){
				i=1;
			}
			//background: url(../images/loading1.png) no-repeat
			
			var url = `url(images/loading${i}.png) no-repeat`;
			this.ele.style.background = url;
			//that.ele.style = 
			
		}.bind(this),300);
		
		setTimeout(function(){
			clearInterval(timer);
			this.ele.remove();
			callback();
		}.bind(this),this.interval)
		
		
	}
}
