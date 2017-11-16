<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		
		你好
		
		<?php
			$arr = array('生活用品','家电');
			
		?>
		
		<ul>
			<?php for($i=0;$i<count($arr);$i++){
				echo '<li>';
				echo $arr[$i];
				echo '</li>';
				
			}?>
				
				
				
			
			
		</ul>
			
		
		
	</body>
</html>
