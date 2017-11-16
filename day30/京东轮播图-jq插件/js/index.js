/**
 * Created by jameswatt2008 on 2017/6/23.
 */
$(function () {

    //callback=jsonpCallbackFocus

var url ='https://f.3.cn/bi/focus8/get?callback=?&pin=&uuid=14931815996541893119345&_=1498183453917'

    $.getJSON(url,function (res) {

        var oUl = $('.jdlb-imglist');
        var page = $('.jdlb-page');
        for(var i=0;i<res.data.length;i++){
        // <!--<li><a href="javascript:;"><img src="images/1.jpg" alt=""></a></li>-->
            var productArray = res.data[i];

            var src =productArray[0].src ;
            var oLi = $('<li></li>');
            var oA = $('<a href="javascript:;"></a>');
            var oImg = $('<img/>');
            oImg.attr('src',src);
            oA.append(oImg);
            oLi.append(oA);
            oUl.append(oLi);
        //    <a href="javascript:;" class="active">
            var pageA = $('<a href="javascript:;"></a>');
            page.append(pageA)

        }


        $('.box').lunbo();

        //lunbo('box');


    })



});