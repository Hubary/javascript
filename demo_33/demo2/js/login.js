$(function(){
	
	
	$('#login').click(function(){
		
		var username = $('#un').val();
		var password = $('#pd').val();
		
		var url = 'http://datainfo.duapp.com/shopdata/userinfo.php';
		
		
		var data = {
			status:'login',
			userID:username,
			password:password
		}
		
		
		$.getJSON(url,data,function(res){
			console.log(res);
			if(res == 0){
				alert('用户名不经存在')
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

