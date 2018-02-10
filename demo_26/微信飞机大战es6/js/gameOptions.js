class GameOptions{
	constructor(callbackfunc){
		console.log('难度选择');
		
		var html = `<ul id="options" class="options">
				<li value="1">超级困难</li>
				<li value="2">非常困难</li>
				<li value="3">比较困难</li>
				<li value="4">简单</li>
			</ul>`;
		var body_main = document.getElementById('body_main');
		body_main.innerHTML = html;
		
		var options = document.getElementById('options');
		var lis = options.getElementsByTagName('li');
		for(let i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				console.log(i);
				options.style.display = 'none';
				
				callbackfunc(i);
			}
		}
		
		
		
		
		
			
		
		
	}
}
