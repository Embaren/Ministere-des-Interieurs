$(document).ready(function(){
	$("head").append('\
	<meta name="description" content="Actualité, clarté, simplicité: retrouvez sur INTERIEURS.RUDF.EU toutes les actions du Ministère des Intérieurs">\
	<meta name="author" content="Emile Barbier--Renard">\
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">\
	<link rel="stylesheet" href="/css/style-miccti.css">');
	
	$.get("/common/miccti-init.rudf", function (data) {
		$("#header-placeholder").append(data);
	});
	
}); 
