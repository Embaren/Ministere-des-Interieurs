$(document).ready(function(){
	$("head").append('\
	<title>Accueil | Ministère des Intérieurs</title>');
	
	$.get("content.rudf", function (data) {
		$("#maincolumn").append(data);
	});
}); 