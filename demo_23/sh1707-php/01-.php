<?php

//我是注释

#我是注释

/*
 注释
 * */

$a = 1;
$box = 2;
$b = 1;

echo 'hello world!';

echo $a;

$num = 1.1;
echo "<br/>";
echo $num;
echo "<br/>";
$flag = true;
echo $flag;
echo "<br/>";
$flag1 = false;
echo $flag1;



//数组 对象
$arr = array('a','b','c','d');
for($i=0;$i<count($arr);$i++){
	echo $arr[$i];
}


$arr2 = array('name'=>'zhangsan','age'=>18);
foreach ($arr2 as $key => $value ){
	echo "$key,$value<br/>";
}


$num1 = 10;
$num2 = 10;
$num3 = $num1 +$num2;
echo $num3;

if( $num1 > $num2){
	echo '1 >2';
}else{
	echo '1 <= 2';
}


$str = 'nihao';
echo $str.'haha';


include '02-in.php';
echo $sex;


$res =  foo('111111222');
echo $res;


$arr3 = array('1','2','3');
$arr4 = ['1','3','4'];

$arr3[0] = '2';

//print_r $arr3;

unset($arr3[2]);//删除

//push   pop
//array_push($arr3,"aaaaa");




for($j=0;$j<count($arr3);$j++){
	echo $arr3[$j];
}

$a=array("red","green");
array_push($a,"blue","yellow");
print_r($a);




?>