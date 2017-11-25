define(function(){
	function addressMsg(){
		$(function(){ 
			 function objInit(obj){ 
			  return $(obj).html('<option>请选择</option>'); 
			 } 
			  
			 $.getJSON('../data/address.json', function(json) { 
			  var arrData = json; 
			  $.each(arrData,function(pF,pV){ 
			   $('#selF').append('<option value="'+pF+'">'+pV.n+'</option>'); 
			  }); 
			  $('#selF').change(function(){ 
			   objInit('#selT'); 
			   objInit('#selC'); 
			   $.each(arrData,function(pF,pS){ 
			    if($('#selF option:selected').attr('value')==pF){ 
			     $.each(pS.s,function(pT,pC){ 
			      $('#selT').append('<option value="'+pT+'">'+pC.n+'</option>'); 
			     }); 
			     $('#selT').change(function(){ 
			      objInit('#selC'); 
			      $.each(pS.s,function(pT,pC){ 
			       if($('#selT option:selected').attr('value')==pT){ 
			        $.each(pC.s,function(ii,vv){ 
			         $('#selC').append('<option value="'+ii+'">'+vv.n+'</option>'); 
			        }) 
			       } 
			      }) 
			     }); 
			    } 
			   }) 
			  }); 
			 }); //getJSON 
			});
			}
				
	return addressMsg;
	
	
	
	
})