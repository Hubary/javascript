//配置js文件路径
require.config({
	paths: {
		'jquery': '../lib/jquery-1.11.3.min'
	}
})

require(['jquery'], function($) {
			//console.log($)
			var uid = getCookie('uid')
			//console.log(uid);
			if(uid != undefined) {
				console.log('用户已经登录了  uid 是'+uid)
			}

		var url = 'http://datainfo.duapp.com/shopdata/getCar.php?callback=?';
			var data = {userID:uid};
			$.getJSON(url,data,function(res){
				console.log(res);
				//return ``
				
			})



				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				//获取cookie
				function getCookie(name) {
					var arr = document.cookie.split("; ");
					//console.log(arr);
					for(var i = 0; i < arr.length; i++) {
						var arr2 = arr[i].split("=");
						if(arr2[0] == name) {

							return decodeURIComponent(arr2[1]);
						}
					}
				}

}) //require结束