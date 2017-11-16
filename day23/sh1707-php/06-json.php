<?php


$str = '{"name":"zhangsan","age":18}';

$res = json_decode($str);

foreach($res as $key=>$value){
	echo "$key:$value";
}


$jsonStr = json_encode($res);
echo $jsonStr;








?>