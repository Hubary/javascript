define(function(){
	
	
	var dog = {
				'name':'旺财',
				'age':2,
				wang:function(){
					console.log(this.name)
				}
				
	
		};
	
	//对外提供的对象
	return dog;
	
	
	
})