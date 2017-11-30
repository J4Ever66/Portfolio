$(document).ready(load);

function load(){
	$('figure').lightGallery({
	  selector: 'a',
	  mode: 'lg-fade',
	  speed: 200,
	  zoom: false,
	  share: false,
	  showThumbByDefault: false
	});	
}