(function($) {

	$(function() {

		var uid = getCookie('uid')
		console.log(uid);
		if(uid != undefined) {
			console.log('用户已经登录了  uid 是')
		}
		
		
		var url = 'http://datainfo.duapp.com/shopdata/getuser.php?callback=?';
		$.getJSON(url,{userID:uid},function(res){
			console.log(res)
		})
		
		
		
		var goodslistUrl = 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=?';
		$.getJSON(goodslistUrl,function(res){
			console.log(res);
			
			var arr =  res.map(function(goods){
				console.log(JSON.parse(goods.imgsUrl))
				
				return `<li>
							<a href="item.html?goodsID=${goods.goodsID}">
							
								<p>${goods.goodsName}</p>
								<img src='${JSON.parse(goods.imgsUrl)[0]}'/>
							</a>
					
						</li>`
				
			})
			
			
			$('.list').html(arr.join(''))
			
			
		})
	
	})

})(jQuery)