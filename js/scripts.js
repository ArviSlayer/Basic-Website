/*
	Preloader
*/

$(window).on("load", function() {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function(){
		preload.fadeOut();
	});
});

$(function () {
	'use strict';
	
	
	/*
		Vars
	*/
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	/*
		Header Menu Desktop
	*/
	
	var container = $('.container');
	var card_items = $('.card-inner');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');
	
	$('.top-menu').on('click', 'a', function(){

		/* vars */
		var width = $(window).width();
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.top-menu li');
		var menu_item = $(this).closest('li');
		var d_lnk = $('.lnks .lnk.discover');

		if((width >= 1024)) {
			
			/* if desktop */
			if(!menu_item.hasClass('active') & (width > 1023) & $('#home-card').length) {

				/* close card items */
				menu_items.removeClass('active');
				container.find(card_items).removeClass('animated '+animation_in);

				if($(container).hasClass('opened')) {
					container.find(card_items).addClass('animated '+animation_out);
				}

				/* open card item */
				menu_item.addClass('active');
				container.addClass('opened');
				container.find(card_item).removeClass('animated '+animation_out);
				container.find(card_item).addClass('animated '+animation_in);
				
				$(card_items).addClass('hidden');
				
				$(card_item).removeClass('hidden');
				$(card_item).addClass('active');
			}
		}
		/* if mobile */
		if((width < 1024) & $('#home-card').length) {

			/* scroll to section */
			$('body,html').animate({
				scrollTop: h - 76
			}, 800);
		}
		return false;
	});

	$(window).on('resize', function(){
		var width = $(window).width();
		var height = $(window).height();

		if((width < 1024)) {
			$('.card-inner').removeClass('hidden');
			$('.card-inner').removeClass('fadeOutLeft');
			$('.card-inner').removeClass('rotateOutUpLeft');
			$('.card-inner').removeClass('rollOut');
			$('.card-inner').removeClass('jackOutTheBox');
			$('.card-inner').removeClass('fadeOut');
			$('.card-inner').removeClass('fadeOutUp');
			$('.card-inner').removeClass('animated');

			$(window).on('scroll', function(){
				var scrollPos = $(window).scrollTop();
				$('.top-menu ul li a').each(function () {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.offset().top - 76 <= scrollPos) {
						$('.top-menu ul li').removeClass("active");
						currLink.closest('li').addClass("active");
					}
				});
			});

			$('.card-inner .card-wrap').slimScroll({destroy: true});
			$('.card-inner .card-wrap').attr('style', '');
		}
		else {
			$($('.top-menu li.active a').attr('href')).addClass('active');
			$('.card-inner .card-wrap').slimScroll({
				height: '570px'
			});
		}
	});
	
	
	/*
		Smoothscroll
	*/
	
	if((width < 1024) & $('#home-card').length) { 
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a.tabs-lnk').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 70 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}
	
	
	/*
		slimScroll
	*/
	
    if(width > 1024) {
        $('.card-inner .card-wrap').slimScroll({
            height: '570px'
        });
    }
	
	
	/*
		Hire Button
	*/
	
	$('.lnks').on('click', '.lnk.discover', function(){
		$('.top-menu a[href="#contacts-card"]').trigger('click');
	});
    
    $('.theme_panel .toggle_bts').on('click', 'a', function(){
		if($(this).hasClass('active')) {

			$(this).removeClass('active');
            $('.theme_panel').removeClass('active');
			
			return false;
		}
		else {

			$(this).addClass('active');
            $('.theme_panel').addClass('active');
		}
	});
    
    $('.theme_panel .layout_style').on('click', 'a', function(){
		var color = $(this).attr('data-color');
        
        $('head').append('<link rel="stylesheet" href="css/template-colors/'+color+'.css" />');
	});
    
    $('.theme_panel .dark_style').on('click', 'a', function(){
		var dark = $(this).attr('data-dark');
        
        if(dark == 'dark') {
            $('head').append('<link rel="stylesheet" href="css/template-dark/dark.css" />');
        }
        else {
            $('link[href="css/template-dark/dark.css"]').remove();
        }
	});
	
	
	/*
		Initialize masonry items
	*/
	
	var $container = $('.grid-items');
	
	$container.imagesLoaded(function() {
		$container.multipleFilterMasonry({
			itemSelector: '.grid-item',
			filtersGroupSelector: '.filter-button-group',
			percentPosition: true,
			gutter: 0
		});
	});
	

	/*
		12. Initialize masonry filter
	*/
	
	$('.filter-button-group').on('change', 'input[type="radio"]', function() {
		if ($(this).is(':checked')) {
			$('.f_btn').removeClass('active');
			$(this).closest('.f_btn').addClass('active');
		}
		/* popup image */
		$('.has-popup-image').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'popup-box',
			image: {
				verticalFit: true
			}
		});
	
		/* popup video */
		$('.has-popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			mainClass: 'popup-box'
		});
	
		/* popup music */
		$('.has-popup-music').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			mainClass: 'popup-box'
		});
	
		/* popup media */
		$('.has-popup-media').magnificPopup({
			type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'popup-box-inline'
		});
	});
	
	
	/*
		Popups
	*/
	
	/* popup image */
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'popup-box',
		image: {
			verticalFit: true
		}
	});
	
	/* popup video */
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'popup-box'
	});
	
	/* popup music */
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'popup-box'
	});
	
	/* popup media */
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'popup-box-inline',
		callbacks: {
			open: function() {
				$('.popup-box-inline .popup-box').slimScroll({
					height: height+'px'
				});
			}
		}
	});
	
	
	/*
		Validate Contact Form
	*/
	
	$("#cform").validate({
		ignore: ".ignore",
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
				
				},
				complete: function() {
				
				},
				success: function(data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});
	
	
	/*
		Validate Commect Form
	*/
	
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});


	// right click image
	$('body').on('contextmenu', 'img', function(e){
		return false; 
	});
	
	
	/*
		Google Maps
	*/
	
	if($('#map').length) {
		initMap();
	}

});


/*
	Google Map Options
*/

function initMap() {
	var myLatlng = new google.maps.LatLng(40.773328,-73.960088); // <- Your latitude and longitude
	var styles = [
	{
		"featureType": "water",
		"stylers": [{
			"color": "#d8dee9"
		},
		{
			"visibility": "on"
		}]
	},
	{
		"featureType": "landscape",
		"stylers": [{
			"color": "#eeeeee"
		}]
	}]

	var mapOptions = {
		zoom: 14,
		center: myLatlng,
		mapTypeControl: false,
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
		styles: styles
	}
	
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'We are here!'
	});
}