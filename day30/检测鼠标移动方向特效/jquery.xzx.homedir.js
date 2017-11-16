/**
 * Created by jameswatt2008 on 2017/3/9.
 */

$.fn.homedir = function () {

    //	<div class="single-demo">
    //     <img src="images/2.jpg">
    //     <a href="javascript:;">千峰教育</a>
    //   </div>

    this.bind('mouseenter mouseleave', function (e) {
        var oA = $(this).children('a');


        //获取鼠标进入的方向，鼠标离开的方法
        var direction = $._getDir($(this),{x: e.pageX, y: e.pageY})

        var type = e.type;

        if(type === 'mouseenter') {
            // 指定起始位置
            switch(direction) {
                case 0:
                    oPos = {
                        left: 0,
                        top: -oA.outerHeight()
                    };
                    break;
                case 1:
                    oPos = {
                        left: oA.outerWidth(),
                        top: 0
                    };
                    break;
                case 2:
                    oPos = {
                        left: 0,
                        top: oA.outerHeight()
                    };
                    break;
                case 3:
                    oPos = {
                        left: -oA.outerWidth(),
                        top: 0
                    };
                    break;
            }
            // 运动到终点
            oA.css(oPos).stop(true).animate({
                left: 0,
                top: 0
            });
        } else {
            // 指定鼠标离开的终点位置
            switch(direction) {
                case 0:
                    oPos = {
                        left: 0,
                        top: -oA.outerHeight()
                    };
                    break;
                case 1:
                    oPos = {
                        left: oA.outerWidth(),
                        top: 0
                    };
                    break;
                case 2:
                    oPos = {
                        left: 0,
                        top: oA.outerHeight()
                    };
                    break;
                case 3:
                    oPos = {
                        left: -oA.outerWidth(),
                        top: 0
                    };
                    break;
            }
            // 运动到终点
            oA.stop(true).animate(oPos);
        }
    });
}