//配置js文件路径
require.config({
	paths:{
		'jquery':'../lib/jquery-1.11.3.min'
	}
})

	//选项卡
	define(function(){
		function commentfun(){
		$(function(){
		//给菜单下的li都绑定点击事件,给一个回调,添加事件对象
		$('.menulist .menu-btn').bind('click',function(event){	
		//console.log(this)	
		//console.log($(this).index())	
		
		$('.menulist .menu-btn').removeClass('active').eq($(this).index()).addClass('active');
		
		$('.panel-box .panel').removeClass('active').eq($(this).index()).addClass('active');	
		
		})
	})
	//评论
	$(function(){
		
			 var url = 'https://club.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98vv6249&productId=5001213&score=0&sortType=5&page=0&pageSize=10&isShadowSku=0&fold=1';
         //var url = 'https://club.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98vv6249&productId=16964392918&score=0&sortType=5&page=0&pageSize=10&isShadowSku=0&fold=1'
         var sc = document.createElement('script');
         sc.src=url;
         document.body.appendChild(sc);
         document.body.removeChild(sc);

        window.fetchJSON_comment98vv6249=function (res) {
            //console.log(res);

            var arr = res.comments.map(function (commentObj) {
                //截取时间
                var timeObj = commentObj.creationTime.slice(0,commentObj.creationTime.length-3);
                //判断是否有图片
                var imgHtml = '';
                var imgArr=[];  //必须要放在if判断外面  在里面  外面访问不到值
                if(commentObj.images){
                  imgArr=commentObj.images.map(function (image) {
                        return `<img src="${image.imgUrl}"/>` ;
                    });
                }
                imgHtml=imgArr.join('');


                //返回到页面的内容
                return `<li>
                            <div class="left">
                                <img src="http://${commentObj.userImage}">
                                <span>${commentObj.nickname}</span>
                                <p>京享值${commentObj.userExpValue}</p>
                            </div>
                            <div class="right">
                                <div class="star"></div>
                                <p>${commentObj.content}</p>
                                <div>${imgHtml}</div>
                                <div>
                                    <span>${commentObj.productColor}</span>
                                    <span>${commentObj.productSize}</span>
                                    <span>${commentObj.productSales[0].saleValue}</span>
                                    <span>${timeObj}</span>
                                </div>
                            </div>
                        </li>`

            });
            //将返回值插入到ul中
            var oList = document.getElementById('list');
            oList.innerHTML=arr.join('');

            //处理星星  也要放在回调函数中
             var stars = document.getElementsByClassName('.star');
              //循环页面的星星那个div 每个评论都有  一个页面有10个
             for(var i=0;i<stars.length;i++){
               if(!res.comments[i].score){
                   score=5;
               }else {
                   //返回里面的score的个数
                   score = res.comments[i].score;
               }

               star(stars[i],score)

             }

            //星星的位置
            function star(ele,score) {
                var t = 5-score;
                //图片星星移动的位置
                ele.style.backgroundPositionX=-t*79/5+'px';
            }
        }
	})
	
}//入口函数	

return commentfun;
})

