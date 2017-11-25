
//配置js文件路径
require.config({
	paths:{
		'jquery':'../lib/jquery-1.11.3.min',
			
		'menu':'secondMenu'	
	}
})

//调用 相当于引入js
require(['jquery','menu'],function($,menu){
	//console.log($)

	menu();
	
	
})
