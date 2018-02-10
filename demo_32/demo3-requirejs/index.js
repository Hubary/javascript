


console.log(1111);



//config 可以配置模块     模块名称 和模块路径(不加.js)
require.config({
	paths:{
		'lunbo1123':'lunbo',
		'menu':'js/menu',
		'jquery':'jquery-1.11.3.min'
	}
	
})


//用轮播功能
//用dog
//加载一个模块
require(['lunbo1123','dog','menu','jquery'],function(m1,m2,m3,$){
	

//	console.log();
	m1()
	m2.wang()
	m3();
	console.log($)
//	console.log()
	
})



