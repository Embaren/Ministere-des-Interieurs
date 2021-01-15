
$(document).ready(function(){
	$("head").empty();
	$.get("/common/base_head.rudf", function (data) {
		$("head").append(data);
	});
	$("head").append('\
	<title>404 | Ministère des Intérieurs</title>\
	<link rel="stylesheet" href="/css/style-404.css">');
	
	$("body").empty();
		$.get("/common/base_404.rudf", function (data) {
			$("body").append(data);
		});
});