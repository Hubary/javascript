/**
 * Created by jameswatt2008 on 2017/6/20.
 */
function Singleton() {
    //如果不存在 就去创建
    if(!Singleton.instance){
//                Singleton.instance = new Msg();


        var div = document.createElement('div');


        var maskDiv = document.createElement('div');

        maskDiv.className = 'mask';
        div.className ='msgContent';



        document.body.appendChild(maskDiv);
        maskDiv.appendChild(div);




        var span = document.createElement('span');
        div.appendChild(span);

        var btn = document.createElement('button');
        btn.innerHTML = '确定';
        btn.className='leftbtn'
        div.appendChild(btn);


        var cancelbtn = document.createElement('button');
        cancelbtn.innerHTML = ' 取消';
        div.appendChild(cancelbtn);
        cancelbtn.className='rightbtn';








        Singleton.instance = new Object();
        Singleton.instance.ele = maskDiv;
        console.log(Singleton.instance.ele)

        Singleton.instance.ele.style.display ='none';
        
        Singleton.instance.show = function (text,Okcallback,cancelCallback) {
            Singleton.instance.ele.style.display ='block';
            span.innerHTML = text;
            
            Singleton.instance.okCallback = Okcallback;
            Singleton.instance.cancelCallback = cancelCallback;

        }
        Singleton.instance.hide = function () {
            Singleton.instance.ele.style.display ='none';

        }

        btn.onclick= function (event) {
        	
            event.stopPropagation();
            
            Singleton.instance.hide();
            Singleton.instance.okCallback();

        }

        cancelbtn.onclick = function (event) {
            event.stopPropagation();
            
            Singleton.instance.hide();
            Singleton.instance.cancelCallback();
        }

    }
    return Singleton.instance;

}
