$(function(){
	
	
	$('#reg').click(function(){
		
		var username = $('#un').val();
		var password = $('#pd').val();
		
		var url = 'http://datainfo.duapp.com/shopdata/userinfo.php';
		
		
		var data = {
			status:'register',
			userID:username,
			password:password
		}
		
		
		$.getJSON(url,data,function(res){
			console.log(res);
			if(res == 0){
				alert('用户名已经存在')
			}else if(res == 1){
				location.href = 'login.html'
			}else{
				alert('网络错误')
			}
		})
	})
	
	
	
})

