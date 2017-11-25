//配置js文件路径
require.config({
	paths: {
		'jquery': '../lib/jquery-1.11.3.min',
		'menu': 'secondMenu',
		'address': 'address',
		'glass': 'magGlass',
		'commentfun':'comment'

	}
})

require(['jquery', 'menu', 'address', 'glass','commentfun'], function($, menu, address, glass,commentfun) {
	//console.log($)
	menu();
	commentfun();
	detail();

	function detail() {

		//获取商品id
		//?id=2&asd=adfsdf23423  获取 id
		//console.log(location.search)
		//var pid = getPid(location.search)
		var pid = getPid(location.search,'goodsID');
		console.log(pid);
		
		//setCookie('proid',pid,30)
		
		//var url = 'getDetail?id=1';
		var url = '../data/pid' + pid + '.json';
		$.getJSON(url, function(res) {
			//console.log(res.data);
			var arr = res.data.map(function(obj) {
				//console.log(obj.imgsArr);
				//循环遍历颜色
				var arr2 = obj.colors.map(function(val) {
					//console.log(val)
					return `<a href="##">${val.des}</a>`
				})

				str = arr2.join('');
				
				//放大镜图片遍历
				var arr3 = obj.imgsArr.map(function(value) {
					//console.log(value)
					return `<img src="${value}" class="small" data-url="${value}"/>`
				})
				//console.log(arr3)
				var html = arr3.join('');

				//data的返回结果
				return `
					<div class="productTitle">
						<div class="margin">
							<b>${obj.productZone}</b>	
							<span>></span>
							<a href="##">${obj.zone1}</a>
							<span>></span>
							<a href="##">${obj.zone2}</a>
							<span>></span>
							<a href="##">${obj.zone3}</a>
							<span>></span>
							<a href="##">${obj.zone4}</a>
						</div>
					</div>		
					<div class="main">
						<div class="margin">	
							<div class="productMsg clear">
							<div class="mag-glass">
								<div class="middle">
								   	<img src="${obj.imgsArr[0]}" class="middlePic">
									<div class="filter"></div>	
								</div>
								<div class="max">
								    	<img src="${obj.imgsArr[0]}" class="maxPic">
									</div>
								<div class="small-imgs">
									<div class="direction">
										<a href="##" class="left"><</a>
										<a href="##" class="right">></a>
									</div>
								    ${html}
								</div>
							</div>
							<div class="details">
									<h3>${obj.title}</h3>
									<div class="pri-comment">
										<p class="price">价格：<b>￥${obj.price}</b><p>
										<div class="comment">
											<p class="countCom">累计评价</p>
											<span class="num">${obj.commentsNum}</span>
										</div>
									</div>
									<div class="container"> 
										 <table> 
											  <tr> 
											   <td>配送至：</td>   
											   <td><select id="selF"><option>请选择</option></select></td>
											   <td>&nbsp;某省&nbsp;</td> 
											   <td><select id="selT"><option>请选择</option></select></td>
											   <td>&nbsp;某市&nbsp;</td> 
											   <td><select id="selC"><option>请选择</option></select></td> 
											   <td>&nbsp;某区&nbsp;</td> 
											   <td>&nbsp;有货</td> 
											  </tr> 
										 </table> 
									</div> 
					  				<div class="colors">
					  					<span>颜色分类：</span>
					  					${str}
					  				</div>
					  				<div class="number">
					  					<span>数量：</span>
					  					<p class="calculate">
									        <button class="minus">-</button>
									        <input type="text" value="1" class="num_text">
									        <button class="add">+</button>
								   		</p>
					  				</div>
						  			<div class="linkShop">
						  					<a href="##" class="shop-now">立即购买</a>
						  					<a href="javascript:;" class="add-shopCart">加入购物车</a>
						  					<a href="##" class="like">喜欢</a>
						  			</div>
									</div>	
								</div>
							</div>
						</div>			
					</div>`

			}) //data循环结束

			$('.box').html(arr.join(''));
			//调用方法
			glass();
			address();
			countNum();
			//当点击加入购物车时，获取用户名id,商品id,数量
			$('.add-shopCart').click(function(){
				var uid = getCookie('uid');
				var num = $('.num_text').val();
				var url = 'http://datainfo.duapp.com/shopdata/updatecar.php';
				var data = {
					userID:uid,
					goodsID:pid,
					number:num
				}
				console.log(data)
				$.getJSON(url,data,function(res){
					console.log(res);
					if(res == 1){
						alert('加入购物车成功');
						location.href = 'shopcart.html';
					}
				});	
			});
		});//请求数据结束

	}; //detail结束

	//封装截取到id值  使列表值与详情页内容对应
	function getPid(search) {
		//获取商品id
		//?id=2&asd=adfsdf23423  获取 id
		var str = search.slice(1); //截取掉 ?
		//console.log(str);
		var arr = str.split('&');
		//console.log(arr)
		var res = '';
		arr.forEach(function(value) {
			//id=1
			var tmpArr = value.split('=');
			var k = tmpArr[0];
			var v = tmpArr[1];

			//console.log(tmpArr)//截取出键  即id 和asd
			if(k == 'id') { //如果键是id则取出对应的数字值
				res = v;
				
			}
		});
		return res;
	}

		//封装加减按钮
		function countNum() {
			$('.add').click(function() {
				var num = $('.num_text').val();
				num++;
				$('.num_text').val(num);
			})

			$('.minus').click(function() {
				var num2 = $('.num_text').val();
				if(num2 == 1) {
					num2 = 1;
				} else {
					num2--;
					$('.num_text').val(num2);
					//consol.log($('.num_text').val(num2))
				}

			})

		}

	//创建cookie
	function setCookie(name,value,iDay){
	
	value = encodeURIComponent(value); 
	
    var newDate = new Date();
    newDate.setDate(newDate.getDate()+iDay);
    document.cookie=name+"="+value+";expires="+newDate;
	}
	
	//获取cookie
	function getCookie(name){
	    var arr = document.cookie.split("; ");
	    //console.log(arr);
	    for(var i =0; i<arr.length; i++){
	        var arr2 = arr[i].split("=");
	        if(arr2[0] == name){
	            return decodeURIComponent(arr2[1]);
	        }
	    }
   }		
}) //require结束