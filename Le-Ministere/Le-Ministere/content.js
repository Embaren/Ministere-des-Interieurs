$(document).ready(function(){
	$("head").append('\
	<title>Le Ministère | Ministère des Intérieurs</title>');
	
	$.get("content.rudf", function (data) {
		$("#maincolumn").append(data);
	});
}); 