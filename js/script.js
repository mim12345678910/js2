//jQuey
$(document).ready(function(){

	$('#btn1').on("click", function(){
      $('h3').fadeIn();     
	});
	$('#btn2').on("click", function(){
      $('h3').fadeOut();     
	});
		$('#btn3').on("click", function(){
      $('h3').fadeToggle("fast");     
	});


});
