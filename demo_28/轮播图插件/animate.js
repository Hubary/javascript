function animate(ele, obj, callback) {

	clearInterval(ele.timer);

	var speed = 0;
	ele.timer = setInterval(function() {

		//width  
		//left 
		//opatciy
		var flag = true; //假设 已经到了目的地

		for(key in obj) {
			//			console.log(typeof key);
			var attr = key;
			//						var value = obj[key];
			var current = parseFloat(getComputedStyle(ele, null)[attr]);

			var target = obj[attr];

			if(attr == 'opacity') {
				//1.0   0.51111
				//100  50
				target = parseInt(target * 100);
				current = parseInt(current * 100);

				speed = (target - current) / 8;

			} else {
				speed = (target - current) / 8;
			}

			if(speed != 0) {
				flag = false;
			}
			if(attr == 'opacity') {
				if(speed > 0) {
					speed = Math.ceil(speed)
				} else {
					speed = Math.floor(speed);
				}
				ele.style[attr] = (current + speed)/100;
			} else {
				//当speed 小于 0.5 就不会发生位移
				if(speed > 0) {
					speed = Math.ceil(speed)
				} else {
					speed = Math.floor(speed);
				}
				ele.style[attr] = current + speed + 'px';
			}
//			console.log(current, target, speed);

		}
		//全都到达目的地 就停止定时器
		if(flag == true) {
			clearInterval(ele.timer);
			console.log('运动结束')

			if(callback) {
				callback();
			}

		}

	}, 50);
}