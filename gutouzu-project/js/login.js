
/*$('.login').click(function(){
		var userVal = $('#userName').val();
		var passVal = $('#passWord').val();
		
		if($('#check').prop("checked")){
			setCookie("username",userVal,7)
			setCookie("password",passVal,7)
		}
	})


if(getCookie("username")){
		var us = getCookie("username");
		var pa = getCookie("password")
		$('#userName').val(us);
		$('#passWord').val(pa);
		
		$('#check').prop("checked",true);
	}
	
	*/
	$(function(){

	$('.login').click(function(){
		
		var username = $('#userName').val();
		var password = $('#passWord').val();

		var url = 'http://datainfo.duapp.com/shopdata/userinfo.php';

		var data = {
			status:'login',
			userID:username,
			password:password
		}
		
		
		$.getJSON(url,data,function(res){
			console.log(res);
			if(res == 0){
				alert('用户名不存在')
			}else if(res == 2){
				alert('密码不对')
			}else{
				//
				setCookie('uid',res.userID,30)
				location.href = 'index.html'
			}
		})
	})
	
})




