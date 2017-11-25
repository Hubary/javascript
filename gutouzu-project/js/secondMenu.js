//定义
define(function(){
	
	function secondMenu(){
		$.getJSON('../data/secondMenu.json',function(res){
			//console.log(res);
			var str = '';
			var arr = res.data.map(function(firstVal){
				//console.log(firstVal);
				
				var arr2 = firstVal.s.map(function(secondVal){
					//console.log(secondVal)
					
				return `<dt><a href="item.html" class="select-shop">选购</a></dt>
						<dd><a href="##" class="proImg"><img src="${secondVal.imgUrl}" class="secondImg"/></a><dd>
						<dd><a href="##" class="imgName">${secondVal.imgName}</a></dd>
					   `
					
				})
					str = arr2.join('');
					//console.log(str);

				//返回的数据
				return `<li>
							<a href="##" class="list-title">${firstVal.title}</a>
							<dl class="secondMenu">${str}</dl>
						</li>`
			})
			$('.menu').append(arr.join(''));
			//console.log(arr.join(''));

		})//json数据结束
	
	
	}//secondMenu结束括号

	return secondMenu; //要有返回值
	
})//定义define的结束括号