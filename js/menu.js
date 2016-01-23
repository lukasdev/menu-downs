(function($){
	$('.icon-menu').on('click', function(){
		var div = $('#menu');
		var offset = div.css('right');

		if(offset == '-308px'){
			div.animate({
				right:'+='+308
			},300);
		}
	});

	$('.fechar').on('click', function(e){
		e.preventDefault();
		var div = $('#menu');
		div.animate({
			right:'-='+308
		},300);
		return false;
	});

})(jQuery);