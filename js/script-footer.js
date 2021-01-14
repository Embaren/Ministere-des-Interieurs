function footerConstruct(toExplore) {
	if(toExplore.length>0){
		cat=toExplore.pop();
		$.getJSON("/"+cat.directory+"/children.json", function(category) {
			htmlbloc=['\
		<div class="bloc-menu">\
			<h3>\
				<a href="/'+cat.directory+'">'+cat.page+'</a>\
			</h3>\
			<ul>'];
			
			category[1].forEach(function(page){
				htmlbloc.push('\
				<li>\
					<a href="/'+cat.directory+"/"+page.directory+'">'+page.page+'</a>\
				</li>');
			});
			
			htmlbloc.push('\
			</ul>\
		</div>');
			$("#footer-site-map").append(htmlbloc.join(''));
			
			footerConstruct(toExplore);
		});
	}
}

$(document).ready(function(){
	$.getJSON("/children.json", function(json) {
		footerConstruct(json[1]);
	});

}); 
