
$(function () {

    //1.li点击事件

    $('#menu li').click(function (evt) {

		console.log(this);//原生的li
        //li 在同辈元素的位置  下标
        console.log($(this).index())
        // console.log(this)



           //2.先清空 所有li 的 class
//         $('#menu li').removeClass('active');
//         $(this).addClass('active');

           
			$(this).addClass('active').siblings().removeClass('active')
//         $('#menu li').removeClass('active').eq($(this).index()).
//         addClass('active');

//      $('#menu li').removeClass('active');
//      $(this).addClass('active')
//
        $('#panel .panel').removeClass('active').eq($(this).index()).
        addClass('active');

    })


});