(function($){
	
	$(function(){
		
		var uid = getCookie('uid')
		console.log(uid);
		if(uid != undefined) {
			console.log('用户已经登录了  uid 是')
			
			
			var url = 'http://datainfo.duapp.com/shopdata/getCar.php?callback=?';
			var data = {userID:uid};
			$.getJSON(url,data,function(res){
				console.log(res)
				
				var countprice = 0;
				
				var arr = res.map(function(goods){
					return `<li>
								<img src='${goods.goodsListImg}'/>
								名称:<span>${goods.goodsName}</span>
								价格:<span>${goods.price}</span>
								
								<input class='addnum' type="button" name="" id="" value="+" />
								数量:<span class='gnum'>${goods.number}</span>
								<input class='odnum' type="button" name="" id="" value="-" />
								
								
								<input class='sel' type="checkbox" name="" id="" value="" />
								
								
							</li>`;
				})
				
				$('.list').html(arr.join(''))
				
				//添加 单选按钮 事件
				$('.sel').change(function(){
					console.log(11)
					console.log($(this).prop('checked'))
					console.log($(this).parent().index());
						var index = $(this).parent().index();
						console.log(res[index]);
						var goodsObj = res[index];
						goodsObj.number;
						goodsObj.price;
						
						var goodsPrice = Number(goodsObj.number)*Number(goodsObj.price);
						console.log(goodsPrice);
					if($(this).prop('checked')){
						countprice += goodsPrice;
						
					}else{
						countprice -= goodsPrice;
					}
					$('.countprice').html(countprice)
				})
								
				//添加数量加减按钮事件
				$('.addnum').click(function(){
					var index =  $(this).parent().index();
					var goodsObj = res[index];
					goodsObj.number = parseInt(goodsObj.number) + 1;
					$(this).next().html(goodsObj.number)
					
					
					var goodsPrice = 1*Number(goodsObj.price);
					countprice += goodsPrice;
					$('.countprice').html(countprice)
					
				});
				$('.odnum').click(function(){
					var index =  $(this).parent().index();
					var goodsObj = res[index];
					goodsObj.number = parseInt(goodsObj.number) - 1;
					$(this).prev().html(goodsObj.number);
					
					var goodsPrice = 1*Number(goodsObj.price);
					countprice -= goodsPrice;
					$('.countprice').html(countprice)
				})
				
				// 全选按钮事件
//				$('.selall').change(function(){
//					$('.sel').trigger('click')
////					$('.selall').trigger()
//				})

				$('.selall').change(function(){
					
					if($(this).prop('checked')){
						//全选
						countprice = 0;
						$('.sel').prop('checked',true);
						res.forEach(function(goodsObj){
							var goodsPrice = Number(goodsObj.number)*Number(goodsObj.price);
							countprice += goodsPrice;
							$('.countprice').html(countprice)
						})
						
					}else{
						//取消全选
						$('.sel').prop('checked',false);
						res.forEach(function(goodsObj){
							countprice = 0;
							$('.countprice').html(countprice)
						})
					}
				})
				
				
			})
			
			
			
		}
		
		
		
		
	})
	
})(jQuery);
