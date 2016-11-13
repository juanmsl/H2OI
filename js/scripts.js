var navbar_height = $('.main-navbar').height();
var navbar_to_top = $('.main-navbar').offset().top + navbar_height * 0.3;

$(window).on('scroll', function(){
	var scrollTop = $(window).scrollTop();

	if (scrollTop > navbar_to_top) {
		$('.main-navbar').addClass('fixed');
	} else {
		$('.main-navbar').removeClass('fixed');
	}
});

$('.main-navbar a').on('click', function(event) {
	event.preventDefault();
	var hash = this.hash;
	$('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){window.location.hash = hash;
	});
});

$('.main-navbar-trigger').on('click', function(){
	$('.main-navbar-menu').slideToggle();
});

$("#owl-example").owlCarousel({
	items : 3,
	itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3]
});
