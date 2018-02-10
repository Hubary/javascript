

require.config({
	
	paths:{
		'jquery':'jquery-1.11.3.min',
		'plist':'productlist'
	}
});


require(['jquery','plist'],function($,plist){
	
	console.log($)
	
	lunbo();
	plist();
	
	function lunbo(){
		$.getJSON('data/lunbo.json',function(res){
			console.log(res)
			//根据数据创建对应的标签
			
		})
	}
	
	
	
	
	
//	//请求列表
//	function productList(){
//		$.getJSON('data/productlist.json',function(res){
//			console.log(res);
//			
//			
//			var arr = res.data.map(function(product){
//				
//				var href = `item.html?id=${product.pid}&asd=adfsdf23423`;
//				
//				return `<li>
//							<a href="${href}">
//							<img src="${product.imgUrl}" />
//							<div>${product.title}</div>
//							</a>
//							
//						</li>`;
//				
//			});
//			
//			
//			$('#list').html(arr.join(''))
//			
//			
//			
//		})
//	}
//	
	
	
	
})
