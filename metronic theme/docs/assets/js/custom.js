$(document).ready(function() {

	var $window = $(window);
	var timeout = false;
	var delay = 250;
	var windowsize;

	// sidebar in mobile mode
	$('.hamburger').click(function() {
		$(this).addClass('toggler_active');
		$('.sidebar__menu').animate({left: '0'}, 200);
		$('.wrapper').addClass('screen');
		$('.cover-layout').css({visibility: 'visible'}).animate({opacity: '1'}, 250);
	});

	/* tabs switcher in faq page */
	$('.contents__sidebar_list > li > a').first().trigger('click');

	function checkWidth() {
		windowsize = $window.width();

		if (windowsize < 1200 && windowsize > 768) {
			$('.contents__sidebar').css('padding-top', '70px');
		}
		else if (windowsize < 768) {
			$('.contents__sidebar').removeClass('fixedsticky');
			$('.contents__sidebar').css('padding-top', '0');
		}
		else {
			$('.contents__sidebar').addClass('fixedsticky');
		}
	}

	// window.resize event listener
	window.addEventListener('resize', function() {
		clearTimeout(timeout);
		timeout = setTimeout(checkWidth, delay);
	});

	// Execute on load
	checkWidth();

	// init tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// var psd = document.getElementsByClassName('perfect-scrollbar');
	// for (var i = 0; i < psd.length; i++) {
	// 	var ps = new PerfectScrollbar(psd.item(i));
	// }

	// // document left side menus
	// $('.contents__sidebar_list_inset').find('li.sublist_parent > a.nav-link').click(function (e) {
	// 	e.preventDefault();
	// 	// $(this).closest('.contents__sidebar_list_inset').find('li.sublist_parent > a.nav-link').removeClass('active');
	// 	$(this).toggleClass('active');
	// });

});
