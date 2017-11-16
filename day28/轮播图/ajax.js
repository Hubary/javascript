function ajax(obj) {

//	obj.url = encodeURIComponent(obj.url);
	console.log(obj.url)

	var xhr = new XMLHttpRequest();

	if(obj.type) {
		if(obj.type.toLowerCase() == 'get') {
			xhr.open("GET", obj.url, true);
			xhr.send(null);
		} else {
			//post 请求
			xhr.open("POST", obj.url, true);

			//注意
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

			//post 参数在 请求体里面
			// last=111&pageSize=10
			//xhr.send('last=111&pageSize=10')
			//把 对象{pagesize:10,last:1000}转为字符串
			var arr = [];
			for(var key in obj.params) {
				console.log(key, obj.params[key]);
				console.log(key + '=' + obj.params[key])
				arr.push(key + '=' + encodeURIComponent(obj.params[key]));

			}
			console.log(arr)
			console.log(arr.join('&'))

			xhr.send(arr.join('&'));
		}
	} else {
		//不存在 说明是 get请求
		xhr.open("GET", obj.url, true);
		xhr.send(null);
	}

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {

			if(xhr.status == 200) {
				var res = JSON.parse(xhr.responseText);
				//				console.log(obj);
				if(obj.success) {
					obj.success(res);
				}

			} else {
				//请求失败
				if(obj.error) {
					obj.error(xhr.status);
				}
			}

			//return obj;
		}
	}

}