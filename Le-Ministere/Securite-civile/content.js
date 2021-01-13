$(document).ready(function(){
	$("head").append('\
	<title>Sécurité civile | Ministère des Intérieurs</title>');
	
	$.get("content.rudf", function (data) {
		$("#maincolumn").append(data);
	});
}); 