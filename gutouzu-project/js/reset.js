//手机号码
$("#calNum").focus(function(){
	$('.calNum1').css({"display":"block","background":"#ffffe5"});
	
})
$("#calNum").blur(function(){	
	//console.log(this)
	if(/^[1](3|4|5|7|8)[0-9]{9}$/.test(this.value)){
		//console.log(this.value)
		//console.log("匹配正确")
		$('.calNum1').html("手机号码填写完成").css({"display":"block","background":"#ffffe5"})
		
		
	}else{
		//console.log(this.value)
		//console.log("重新输入")
		$('.calNum1').html("号码输入不正确").css({"display":"block","background":"#fdf3f2","border":"1px solid #ffc4c4"})
	}
})
	
//随机验证码	
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
	return str;
}
	
//页面刷新时，出现验证码 
	$('.authcode').val(authCode());

//当点击验证码时 验证码随机切换
	var str1 = '';
	$('.authcode').click(function(){
 		str1=authCode();
		//console.log(str1);
		this.value=str1;
	})
	
//图形验证码
$(".ImgVCode").focus(function(){
	
	/*if($('.authcode').value=str1){
		$('.ImgVCode1').html('验证码正确').css({"display":"block","background":"#ffffe5"});
	}*/
	$('.ImgVCode1').css({"display":"block","background":"#ffffe5"});
	
})

$('.ImgVCode').blur(function(){
		//console.log($('.ImgVCode'))
		if(this.value==str1){
			
			$('.ImgVCode1').html("验证码正确").css({"display":"block","background":"#ffffe5"})
		}else{
			$('.ImgVCode1').html("请重新输入验证码").css({"display":"block","background":"#fdf3f2","border":"1px solid #ffc4c4"})
		}
	})


//设置密码
$("#pwdNum").focus(function(e){
	$('.pwdNum1').html("请输入6-20位密码，可使用字母、数字或符号组成，不建议使用纯数字，纯字母，纯符号").css({"display":"block","background":"#ffffe5"})
	//$('.pwdNum1').css({"display":"block","background":"#ffffe5"});
	
})
$("#pwdNum").blur(function(e){	
	//console.log(this)
	if(/^\w{6,20}$/.test(this.value)){
		
		$('.pwdNum1').html("密码设置完成").css({"display":"block","background":"#ffffe5"})
		
		
	}else{
		$('.pwdNum1').html("密码长度只能在6-20位字符之间").css({"display":"block","background":"#fdf3f2","border":"1px solid #ffc4c4"})
	}
})

/*$('.register').click(function(){
	var name=$('#calNum').val()
	var word=$('#pwdNum').val()
	
	
	setCookie('username',name,7);
	setCookie('password',word,7);
})

if(getCookie("username")){
		var us = getCookie("username");
		var pa = getCookie("password")
		$('.NumCode').val(us)
		$('#calNum').val(us)
		$('#pwdNum').val(pa)

}*/
	$(function(){

	$('.register').click(function(){
		
		var username = $('#calNum').val();
		var password = $('#pwdNum').val();
		
		var url = 'http://datainfo.duapp.com/shopdata/userinfo.php';
		
		
		var data = {
			status:'register',
			userID:username,
			password:password
		}
		
		
		$.getJSON(url,data,function(res){
			//console.log(res);
			if(res == 0){
				alert('用户名已经存在')
			}else if(res == 1){
				location.href = 'login.html'
				//console.log(1111)
			}else{
				alert('网络错误')
			}
		})
	})

})



