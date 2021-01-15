function newsprevconstruct(Articles,n){
	if (n!=0 && Articles.length>0){
		article=Articles.shift();
		htmlbloc=['\
		<div class="newsprev">'];
		if ("picture" in article){
			htmlbloc.push('\
			<div class="attribute-image">\
				<img src="' + article.directory+'/'+article.picture + '" style alt="' + article.page + '" title="' + article.page + '">\
			</div>');
		}
		htmlbloc.push('\
			<div class="line-content-with-img">');
		
		if ("date" in article){
			htmlbloc.push('\
				<div class="attribute-date">\
					'+ article.date +'\
				</div>');
		}
		
		htmlbloc.push('\
				<h2>\
					<a href="' + article.directory + '" title="' + article.page + '">'+ article.page +'</a>\
				</h2>');
		htmlbloc.push('\
			</div>\
		</div>');
		$(".content-view-children").append(htmlbloc.join(''));
		newsprevconstruct(Articles,n-1);
	}
}

$(document).ready(function(){
	$.getJSON("children.json", function(json) {
		
		$("head").append('\
	<title>'+json[0]+' | Ministère des Intérieurs</title>');
		
		$("#maincolumn").append('\
	<h1>'+json[0]+'</h1>\
	<div class="content-view-children">\
	</div>');
		newsprevconstruct(json[1],5);
	});
}); 