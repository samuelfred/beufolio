console.log('hi');
document.getElementById("mynav").style.width = "0%";
$(document).ready(function(){

	 $('.fa').click(function(){
	 	document.getElementById("mynav").style.width = "100%";
	 })
	 $('.close').click(function(){
	 	document.getElementById("mynav").style.width = "0%";
	 })
})
