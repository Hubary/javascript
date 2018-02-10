

require.config({
	
	paths:{
		'jquery':'jquery-1.11.3.min'
	}
});


require(['jquery'],function($){

	detail();

	function detail(){
		
		//获取商品id
		//?id=2&asd=adfsdf23423  获取 id
		
		console.log(location.search)
		var pid = getPid(location.search);
		
		console.log(pid,'11212121')
		//根据id 请求接口 获取商品详情
		
		
//		var url = 'getDetail?id=1';
		var url = 'data/pid'+pid+'.json';
		$.getJSON(url,function(res){
			console.log(res);
		})
		
		
		
	}
	
	function getPid(search){
		//获取商品id
		//?id=2&asd=adfsdf23423  获取 id
		var str = search.slice(1);
		console.log(str);
		var arr = str.split('&');
		console.log(arr)
		var res = '';
		arr.forEach(function(value){
			//id=1
			var tmpArr =  value.split('=');
			var k = tmpArr[0];
			var v = tmpArr[1];
			
			console.log(k)
			if(k == 'id'){
				console.log(v,'1111111')
				res =  v;
			}
			
		});
		
		return res;
		
	}
	
	

	
});

