/**
 * Created by jameswatt2008 on 2017/6/23.
 */
$.fn.lunbo = function () {


    console.log(this);

    var timer = null;


    var that = this;

    //添加 事件

    this.hover(function () {
        console.log(this)
         that.find('.jdlb-direction').css({display:'block'});
        clearInterval(timer);
    },function () {
        that.find('.jdlb-direction').css({display:'none'});
        atuoPlay();
    })

    var oLis = this.find('.jdlb-imglist li');

    var  leftBtn=   this.find('.jdlb-direction').find('.left-btn')
    var rightBtn =   this.find('.jdlb-direction').find('.right-btn')

    var index = 0;
    pageShow(index)
    atuoPlay();


    leftBtn.click(function () {
        index--;
        move();
        // pageShow(index)
        // oLis.eq(index).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})

    });
    rightBtn.click(function () {
        index++;
        move();

    })

    function move() {
        if(index <0){
            index = oLis.size()-1;
        }
        if(index >=oLis.size()){
            index = 0;
        }
        pageShow(index);
        oLis.eq(index).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})
    }


    function pageShow(index) {
        console.log(this);
        that.find('.jdlb-page a').removeClass('active').eq(index).addClass('active')
    }


    function atuoPlay() {
        timer = setInterval(function () {
            // index++;
            // move();

            //模拟 触发事件
            rightBtn.trigger('click')

        },2000)
    }



}