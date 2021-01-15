$(document).ready(function(){
	console.log("Here");
	$.getJSON("children.json", function(json) {
		
		$("head").append('\
	<title>'+json[0]+' | Ministère des Intérieurs</title>');
		
		$("#maincolumn").append('\
	<h1>'+json[0]+'</h1>');
	});
}); 