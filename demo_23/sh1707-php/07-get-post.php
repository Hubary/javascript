<?php

$username = $_GET['username'];
$password = $_GET['password'];

if($username == 'admin' && $password == '12345'){
	echo '{"code":1,"msg":"登录成功","token":"afasdfa9df7a9s7dfa9s7df9","uid":"0000001"}';
}else{
	echo '{"code":0,"msg":"登录失败"}';
}

//echo $username.$password;

?>