define('plist',function(){
	
	
		//请求列表
	function productList(){
		$.getJSON('data/productlist.json',function(res){
			console.log(res);
			
			
			var arr = res.data.map(function(product){
				
				var href = `item.html?id=${product.pid}&asd=adfsdf23423`;
				
				return `<li>
							<a href="${href}">
							<img src="${product.imgUrl}" />
							<div>${product.title}</div>
							</a>
							
						</li>`;
				
			});
			
			
			$('#list').html(arr.join(''))
			
			
			
		})
	}
	
	
	
	return productList;
})
