$.extend({
	log:function(str){
		console.log(str);
	},
	forEach:function(arr,callback){
		
		for(var i=0;i<arr.length;i++){
			
			var index = i;
			var value = arr[i];
			
			callback(index,value);
			
		}
		
	},
	myMap:function(arr,callback){
		var res = [];
		for(var i=0;i<arr.length;i++){
			var index = i;
			var value = arr[i];
			
			var tmp =  callback(index,value);
			res.push(tmp);
			
		}
		
		
		return res;
		
		
		
	}
	
})