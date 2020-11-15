$(document).ready(function() {
	$('.open-lesson').magnificPopup({
		type:'inline',
		midClick: true 
	});
	$('.header__burger').on('click', function(event) {
		event.preventDefault();
		$($(this).attr('href')).addClass('header__nav-block');
	});

	$(document).mouseup(function (e) {
	    var container = $(".header__nav-block");
	    if (container.has(e.target).length === 0){
	        container.removeClass('header__nav-block');
	    }
	});
});
