/*jshint jquery:true */

$(document).ready(function($) {
	"use strict";

	/* global google: false */
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/*-------------------------------------------------*/
	/* =  nav animate
	/*-------------------------------------------------*/

	var ToogleMenu = $('a.open-menu');

	ToogleMenu.on('click', function(event) {
		event.preventDefault();

		var MainMenu = $('.navbar-nav'),
			$this = $(this);
		if ( !$this.hasClass('opened') ) {
			$this.addClass('opened');
			$this.find('i').removeClass('fa-bars');
			$this.find('i').addClass('fa-times');
			MainMenu.addClass('active');
		} else {
			$this.removeClass('opened');
			$this.find('i').removeClass('fa-times');
			$this.find('i').addClass('fa-bars');
			MainMenu.removeClass('active');
		}
	});

	/*-------------------------------------------------*/
	/* = Revolution slider
	/*-------------------------------------------------*/

	try{
		var tpj=jQuery;							
		var revapi202;
		tpj(document).ready(function() {
			if (tpj("#rev_slider_202_1").revolution === undefined) {
				
			} else {
			revapi202 = tpj("#rev_slider_202_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "js/",
				sliderLayout: "fullscreen",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
					bullets: {
						enable: true,
						hide_onmobile: true,
						hide_under: 800,
						style: "zeus",
						hide_onleave: false,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 40,
						space: 5,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
					}
				},
				responsiveLevels: [1140, 1024, 778, 480],
				visibilityLevels: [1140, 1024, 778, 480],
				gridwidth: [1140, 1024, 778, 480],
				gridheight: [700, 700, 960, 720],
				lazyType: "none",
				parallax: {
					type: "scroll",
					origo: "slidercenter",
					speed: 1000,
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
				},
				shadow: 0,
				spinner: "off",
				stopLoop: "on",
				stopAfterLoops: 0,
				stopAtSlide: 1,
				shuffle: "off",
				autoHeight: "off",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "101px",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
				});
			}
		}); /*ready*/
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	try{

		var skillBar = $('.skills-section');
		skillBar.appear(function() {

			var animateElement = $(".meter > p");
			animateElement.each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});

		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* =  Google maps
	/*-------------------------------------------------*/

	var contact = {"lat":"38.582195", "lon":"-121.478755"}; //Change a map coordinate here!

	try {


		var mapContainer = $('#map');
		mapContainer.gmap3({
			action: 'addMarker',
			marker:{
				options:{
					icon : new google.maps.MarkerImage('images/marker.png')
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 12,
				styles: [
					{
						featureType: 'water',
						elementType: 'geometry.fill',
						stylers: [
							{ color: '#2b2b2b' }
						]
					},
					{
						featureType: 'landscape',
						elementType: 'geometry',
						stylers: [
							{ hue: '#333333' },
							{ saturation: -100 },
							{ lightness: -78 },
							{ visibility: 'on' }
						]
					},
					{
						featureType: 'poi',
						elementType: 'geometry',
						stylers: [
							{ color: '#333' }
						]
					},
					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [
							{ color: '#2e2e2e' }
						]
					},
					{
						featureType: 'all',
						elementType: 'labels',
						stylers: [
							{ hue: '#333' },
							{ saturation: -100 },
							{ lightness: -38 },
							{ visibility: 'on' }
						]
					},
					{
						featureType: 'administrative',
						elementType: 'labels',
						stylers: [
							{ hue: '#656565' },
							{ saturation: -100 },
							{ lightness: -38 },
							{ visibility: 'on' }
						]
					},
					{
						featureType: 'transit',
						elementType: 'geometry',
						stylers: [
							{ hue: '#333333' },
							{ saturation: 0 },
							{ lightness: -73 },
							{ visibility: 'on' }
						]
					}
				]
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* = 	Tabs
	/*-------------------------------------------------*/
	try {
		$('#myTabs a').on('click', function (e) {
			e.preventDefault();
			$(this).tab('show');
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-danger').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

});

/* ---------------------------------------------------------------------- */
/*	resize function
/* ---------------------------------------------------------------------- */

function Resize() {
	$(window).trigger('resize');
}

/* ---------------------------------------------------------------------- */
/*	Medium Post
/* ---------------------------------------------------------------------- */

// import { hello } from './module.js';

// var container = document.getElementById("retainable-rss-embed");
// if (container) {
//     var css = document.createElement('link');
//     css.href = "https://www.twilik.com/assets/retainable/rss-embed/retainable.css";
//     css.rel = "stylesheet"
//     document.getElementsByTagName('head')[0].appendChild(css);
//     var script = document.createElement('script');
//     script.src = ./mediumPost.js;
//     document.getElementsByTagName('body')[0].appendChild(script);
// }