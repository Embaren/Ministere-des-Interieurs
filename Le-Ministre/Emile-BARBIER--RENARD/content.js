$(document).ready(function(){
	$("head").append('\
	<title>Emile BARBIER--RENARD | Ministère des Intérieurs</title>\
	<link rel="stylesheet" href="/css/style-ministre.css">');
	
	$.get("content.rudf", function (data) {
		$("#maincolumn").append(data);
	});
}); 