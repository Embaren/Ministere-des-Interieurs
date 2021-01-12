
$(document).ready(function(){
	$("head").empty();
	$("head").append('\
	<meta charset="utf-8">\
	<title>404 | Ministère des Intérieurs</title>\
	<script src="https://code.jquery.com/jquery-3.5.0.js"></script>\
	<link rel="stylesheet" href="/css/style-404.css">');
	
	$("body").empty();
	$("body").append('\
	<div id=page>\
		<div id="header-placeholder">\
		</div>\
		<script src="/js/script-init.js"></script>\
		<div class="Maintenance">SITE EN MAINTENANCE</div>\
	</div>');
});