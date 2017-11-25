define(function(){
	function productlist(){
		
		$.getJSON('../data/productlist.json',function(res){
			console.log(res)
			var arr = res.data.map(function(product){

				var href = `item.html?id=${product.pid}&asd=productmassage`;
				
				return `<li>
							<a href="${href}">
								<img src="${product.imgUrl}"/>
								<div class="list-content">
									<p class="listTitle">${product.title}</p>
									<a href="##" class="go-shopping">立即抢</a>
									<p class="price"><span>${product.price}</span><b>${product.delprice}</b></p>
								</div>
							</a>
						</li>`
				
				});
				$('.productList').html(arr.join(''))
				

		})//getJSON结束

	}//productlist结束

	return productlist;
})//define结束