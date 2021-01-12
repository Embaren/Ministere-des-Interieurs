
$(document).ready(function(){
	$("head").empty();
	$("head").append('\
	<meta charset="utf-8">\
	<title>404 | Ministère des Intérieurs</title>\
	<script src="https://code.jquery.com/jquery-3.5.0.js"></script>');
	
	$("body").empty();
	$("body").append('\
	<div id=page>\
		<div id="header-placeholder">\
		</div>\
		<script src="/js/script-init.js"></script>\
		<div>Site en maintenance</div>\
	</div>');
});