(function($){
	$(function(){
		var uid = getCookie('uid')
		console.log(uid);
		if(uid != undefined) {
			console.log('用户已经登录了  uid 是')
		}
			
		
		//商品id
		var gid =  getPid(location.search,'goodsID');
		console.log(gid);
		
		//根据商品id 获取商品详情
		
		var url = 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=?&goodsID='+gid;
		$.getJSON(url,function(res){
			console.log(res);
			
			var goods = res[0];
			
			var goodsName = goods.goodsName;
			var goodsID = goods.goodsID;
			var price = goods.price;
			var detail = goods.detail;
			var buynumber = goods.buynumber;
			
			$('.pname').html(goodsName);
			$('.pprice').html(price);
			
		});
		
		$('.addnum').click(function(){
			console.log($('.pnum').html())
			var num = parseInt($('.pnum').html());
			console.log(num)
			num ++;
			$('.pnum').html(num);
			
		});
		$('.odnum').click(function(){
			
			
			var num = parseInt($('.pnum').html());
			
			if(num == 1){
				return;
			}
			
			num --;
			$('.pnum').html(num);
			
		})
		
		
		$('.addcartbtn').click(function(){
			var num = $('.pnum').html();
			var url = 'http://datainfo.duapp.com/shopdata/updatecar.php';
			var data = {
				userID:uid,
				goodsID:gid,
				number:num
			}
			
			$.getJSON(url,data,function(res){
				console.log(res);
				if(res == 1){
					alert('加入购物车成功');
				}
			});
			
			
		})
		
		
	})
	
	
})(jQuery);



function getPid(search,key){
		//获取商品id
		//?id=2&asd=adfsdf23423  获取 id
		var str = search.slice(1);
//		console.log(str);
		var arr = str.split('&');
//		console.log(arr)
		var res = '';
		arr.forEach(function(value){
			//id=1
			var tmpArr =  value.split('=');
			var k = tmpArr[0];
			var v = tmpArr[1];
			
//			console.log(k)
			if(k == key){
//				console.log(v,'1111111')
				res =  v;
			}
			
		});
		
		return res;
		
	}
