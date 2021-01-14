$(document).ready(function(){
	$.getJSON("children.json", function(json) {
		
		$("head").append('\
	<title>'+json[0]+' | Ministère des Intérieurs</title>');
		
	});
	
	$.get("content.rudf", function (data) {
		$("#maincolumn").append(data);
	});
}); 