
//配置js文件路径
require.config({
	paths:{
		'jquery':'../lib/jquery-1.11.3.min',
		'lunbo':'lunbo',	
		'menu':'secondMenu',
		'prolist':'productlist'
	}
})

//调用 相当于引入js
require(['jquery','lunbo','menu','prolist'],function($,lunbo,menu,prolist){
	//console.log($)
	//调用轮播
	lunbo();
	menu();
	prolist();
	
	

})
