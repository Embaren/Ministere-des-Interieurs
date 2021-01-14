$(document).ready(function(){
	var title;
	var htmlbloc;
	$.getJSON("/children.json", function(json) {
		json[1].forEach(function(child){
			$.getJSON("/"+child.directory+"/children.json", function(category) {
				htmlbloc=['\
			<div class="bloc-menu">\
				<h3>\
					<a href="/'+child.directory+'">'+child.page+'</a>\
				</h3>\
				<ul>'];
				
				category[1].forEach(function(page){
					htmlbloc.push('\
					<li>\
						<a href="/'+child.directory+"/"+page.directory+'">'+page.page+'</a>\
					</li>');
				});
				
				htmlbloc.push('\
				</ul>\
			</div>');
				$("#footer-site-map").append(htmlbloc.join(''));
			});

		});
	});

}); 
