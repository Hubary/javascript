//1、获取最大值
function getMax(){
	var max = arguments[0];//最大值是伪数组的第1个
	for(var i=0;i<arguments.length;i++){
		if(max<=arguments[i]){
			max=arguments[i];
		}
	}
	return max;
}

//2、获取最小值
function getMin(){
	var min =arguments[0];
	for(var i=0;i<arguments.length;i++){
		if(min>=arguments[i]){
			min=arguments[i]
		}
	}
	return min;
}

//3、随机数 n小于m
function randomNum(n,m){
	return parseInt(n+Math.random()*(m-n+1));
}

//4、打乱随机排序
function random1Number(arr){
	arr.sort(function(){
		return 0.5-Math.random();
	})
 	return arr;
}

//5、返回最大值   传入的参数是数组
function getMax(arr){
	var max = arr[0];
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i]
		}
	}
	return max;
}

//6、返回最小值   传入的参数是数组
function getMin(arr){
	var min = arr[0];
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i]
		}
	}
	return min;
}

//7、返回最大值的下标  传入的是数组
function getMaxIndex(arr){
	var max = arr[0];
	var index;
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i];
			index=i;
		}
	}
	return index;
}

//8、返回最小下标  传入的是数组
function getMinIndex(arr){
    var min = arr[arr.length-1];//数组的最后一个下标
    var index=arr.length-1;
    for(var i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
            index=i;
        }
    }
    return index;
}

//9、冒泡排序  传入的是数组
function bubbling(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;

			}
		}
	}
	return arr;
}

//10、选择排序 传入的是数组
function selectSort(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
//11、数组判断是否有某个值
//传入的值是一个数组  n是一个字符
function has(arr,n){
	for(var i in arr){
		if(arr[i]===n){
			return true;
		}
	}
	return false;
}
//12、数组去重
function norepeat(arr){
	var newArr = [];
	for(var i in arr){
		if(!has(newArr,arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

//13、数组插入 按照原来顺序排序
function sort1Arr(arr,n){			
	for(var i=0;i<arr.length;i++){
		if(arr[arr.length-1]<n){//如果最后一个值都<插入的值
		arr.push(n);//直接在数组的末尾插入进去
		}else if(arr[i]>n){//如果数组中的第i个的值大于要插入的值
		arr.splice(i,0,n);
		//在i后面插入n  因为数组的值>n 但是i是下标所以在该值的前面插入了数据
		break;
		}
		}
	return arr	
}
//14、验证码  6位数的验证码
function authCode(){
	var str = '';
	while(str.length<6){//字符串的长度要<6位
		var num = randomNum(48,122)//随机产生这个之间的
		//去除特殊字符 只要大小写字母和数字
		//如果随机产生的数字在这个这几个特殊字符中间
		if((num>57&&num<65)||(num>90&&num<97)){
			num = randomNum(48,122);//则返回数字
		}else{
			//否则做字符串拼接 让随机产生的数字转换成ASCII码中对应的字符
			str+=''+String.fromCharCode(num)
		}
		
	}
	return str
}

//15、随机颜色
function randomColor(){
	var R = random1Num(0,255)
	var G = random1Num(0,255)
	var B = random1Num(0,255)
	return "#"+string2Num(R,G,B) 
}
//16、转换为16进制不足补0
function string2Num(r,g,b){
	r = r.toString(16).length<2?"0"+r.toString(16):r.toString(16);
	g = g.toString(16).length<2?"0"+g.toString(16):g.toString(16);
	b = b.toString(16).length<2?"0"+b.toString(16):b.toString(16);
	return r+g+b;
}

//17、将时间对象转换成字符串
function date2String(d,sign){
	if(sign==undefined){
		sign="/"
	}

	return d.getFullYear()+sign+addzero((d.getMonth()+1))+sign+addzero(d.getDate())+" "+addzero(d.getHours())+":"+addzero(d.getMinutes())+":"+addzero(d.getSeconds());
}
//当数字不足两位的时候补0  应用于时间对象
function addzero(num){
	var str = ""+num;
	return str.length<2?"0"+str:str;
}
//当位数不足三位，毫秒中保持三位
function addzero2(num){
    var str = ""+num;
    //如果字符串的长度为1位时，返回值加两个0
    if(str.length<=1) {
        return "00" + str;
        //如果字符串的长度为2位时，返回值加一个0
    }else if(str.length<=2){
        return "0"+str;
    }else {
        return str;
    }
}
//18、获取id元素


/*function $(id){
	var id = id.slice(1,id.length);
   return document.getElementById(id)
}*/


//19、获取非行间样式
//ele:对象
//attr:属性
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr]
	}
}
//20、隐藏
function hide(ele){
	ele.style.display="none";
}
//21、显示
function show(ele){
	ele.style.display="block";
}
//22、获取设置自定义属性
function attr(ele,type,val){
	if(arguments.length<2){return};

	if(arguments.length==2){
		return ele.getAttribute(type);
	}

	ele.setAttribute(type,val);
}
//23、获取到前一个兄弟节点(元素)
function prevChild(ele) {
	 return ele.previousElementSibling;
}
//24、获取当前元素距离页面的距离
function offset(ele){
	var obj = {};
	obj.l = ele.offsetLeft;
	obj.t = ele.offsetTop;

	while(ele.offsetParent){	//当找到对象的已定位父元素
		var ele = ele.offsetParent;
		obj.l+=ele.offsetLeft;
		obj.t+=ele.offsetTop;
	}
	return obj;
}

//25、阻止浏览器默认行为
function prevent(e){
	e.preventDefault?e.preventDefault():e.returnValue = false;
}

//26、事件监听
//第一次参数:对象
//第二个参数：事件类型
//第三个参数：回调函数
//第四个参数：是否捕获
function attach(ele,type,fn,bool){
	if(!bool){ //判断是否传了   是否捕获
		bool=false;
	}
	if(ele.addEventListener){
		//网景中  有是否捕获
		ele.addEventListener(type,fn,bool)
	}else{
		//IE中没有是否捕获 事件类型要加on
		ele.attachEvent("on"+type,fn)
	}
}

//27、阻止事件冒泡
function cancel(e){
	e.stopPropagetion?e.stopPropagetion():e.cancelBubble = true;
}

//28、设置cookie
function setCookie(_name,_val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);
	document.cookie = _name+"="+_val+";expires="+d;
}

///29、获取cookie
function getCookie(_name){
	var cookie = document.cookie;//获取到当前的cookie
	var arr = cookie.split("; ");//以分号和空格分割
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");//赋值给新数组 原数组的每一个以=分割
		if(newArr[0]==_name){//如果新数组里面第一个值=输入的名字
			return newArr[1];//返回数组中的第二个值
		}
	}
}

//30、删除cookie
function removeCookie(_name,_val){
	setCookie(_name,_val,-1)
}
//31、获取className 无兼容性问题
//父级元素
//class类名
function getClassName(parent,aClass){
	//获取到父元素底下所有的子元素
	var aEle = parent.getElementsByTagName('*');
	var arr = [];
	//匹配传进来的这个字符是不是一个边界符
	var reg = new RegExp('\\b'+aClass+'\\b');
	for(var i=0;i<aEle.length;i++){
		if(reg.test(aEle[i].className)){
			arr.push(aEle[i])
		}
	}
	return arr;
}

//32、完美运动框架
function move(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bStop = true;
        for(var attr in json){
            var iCur = 0;
            if(attr=='opacity'){
                iCur = parseInt(parseFloat(getStyle(obj,attr))*100)
            }else{
                iCur = parseInt(getStyle(obj,attr))
            }

            if(iCur!=json[attr]) {
                bStop = false;
            }

            var speed = (json[attr]-iCur)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);


            if(attr=='opacity'){
                obj.style.opacity = (iCur+speed)/100;
                obj.style.filter = 'alpha(opacity:'+(iCur+speed)+')'
            }else{
                obj.style[attr]=iCur+speed+'px';
            }
        }

        if(bStop){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30)
}
