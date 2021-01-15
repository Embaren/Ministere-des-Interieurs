
$(document).ready(function(){
	$("head").empty();
	$.get("/common/base_head.rudf", function (data) {
		$("head").append(data);
	});
	$("head").append('\
	<title>404 | Ministère des Intérieurs</title>\
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