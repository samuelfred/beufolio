console.log('hi');
document.getElementById("mynav").style.width = "0%";

$(document).ready(function(){

	 $('.fa').click(function(){
	 	$('#mynav').toggle();
	 	// document.getElementById("mynav").style.width = "100%";
	 })
	 $('.close').click(function(){
	 	$('#mynav').hide();
	 	// document.getElementById("mynav").style.width = "0%";
	 })
})
