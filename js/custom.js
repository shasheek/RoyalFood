

(function($) {
    "use strict";
	
		/* ==============================================
			SMOOTH SCROLL 
		=============================================== */
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
				|| location.hostname == this.hostname) {
		
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				   if (target.length) {
					 $('html,body').animate({
						 scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
		  // Activate scrollspy to add active class to navbar items on scroll
		  $('body').scrollspy({
			target: '#mainNav',
			offset: 54
		  });
		/* =========================
            SCROLL MENU
        =========================*/
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header-block-top').addClass('fixed-menu');
			} else {
				$('.header-block-top').removeClass('fixed-menu');
			}
		});
		
		/* =========================
            NAV MENU
        =========================*/
		$('.navbar-nav li a').on("click", function(e) {
			$('.navbar-nav li').removeClass('active');
			var $parent = $(this).parent();
			if (!$parent.hasClass('active')) {
				$parent.addClass('active');
			}
		});
		
		/* =========================
            CAROUSEL 
        =========================*/
		
		$(document).ready(function() {
		  $("#owl-demo").owlCarousel({
			  autoPlay: 3000, //Set AutoPlay to 3 seconds
			  items : 3,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,2]
		 
		  });
		});

		$(document).ready(function () {
		// Get the modal
		var modal = document.getElementById("myModal");
		// var myModalSuccess = document.getElementById("myModalSuccess");

		// var myModalFail = document.getElementById("myModalFail");


		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");
		var btn1 = document.getElementById("myBtn1");
		var btn2 = document.getElementById("myBtn2");
		var btn3 = document.getElementById("myBtn3");
		var navbar = document.getElementById("navbar");
		var loaderid = document.getElementById("loader");
		var modalsuccess = document.getElementById("myModalSuccess");
		var modalFail = document.getElementById("myModalFail");
		var formsubmit = document.getElementById("submit");
		var errmsg = document.getElementById("errormessage");



		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close1")[0];
		var spans = document.getElementsByClassName("closes")[0];
		var spanf = document.getElementsByClassName("closef")[0];


		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		modal.style.display = "block";
		}

		btn1.onclick = function() {
			modal.style.display = "block";
			}
			btn2.onclick = function() {
				modal.style.display = "block";
				}
				btn3.onclick = function() {
					modal.style.display = "block";
					}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		modal.style.display = "none";
		}

		spans.onclick = function() {
			modalsuccess.style.display = "none";
			}

			spanf.onclick = function() {
				modalFail.style.display = "none";
				}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			navbar.style.display = "none";
				if (event.target == modal) {
					modal.style.display = "none";
				}
		}

		formsubmit.onclick=function() {
			
				loaderid.style.display = "block";
				var first_name= $('#form_name').val();							
				var phone= $('#phone').val();								
				var mealplan= $('#mealplan').val();
				var date=  $('#date-picker').val();
				var area=  $('#localarea').val();

				if(first_name=="" || phone=="" || mealplan==null || date=="" || area==null)
				{
					 errmsg.style.display="block";
					 return;

				}
				else{
					errmsg.style.display="none";
				}

				var body='<b>'+ 'Name: ' + first_name + '<br>Mobile No: ' + phone + '<br>Plan: ' + mealplan + '<br>Date: ' + date + '<br>Area:' + area+'</b>';

				body="shashi";
				Email.send({
					Host : "smtp.gmail.com",
					Username : "royalfoodclubhelp@gmail.com",
					Password : "spzbmepp",
					To : 'abcdshashikant@gmail.com',
					From : "royalfoodclubhelp@gmail.com",
					Subject : "New Enquiry " +first_name,
					Body : body,
				}).then(
					

				  message => {
					if(message=='OK') {
						localStorage.setItem("messageStatus", "yes");
						modalsuccess.style.display="block";
					    location.reload();

					}
					else
					{
						localStorage.setItem("messageStatus", "no");
						modalFail.style.display="block";
					location.reload();

					}

				  }

				);
		};
	});

	
		
		/* ========================
			SLIDER - TAB 
		=============================*/
		
		
		 $('.slider-single').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			adaptiveHeight: true,
			infinite: false,
			useTransform: true,
			speed: 400,
			cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		 });
		
		 $('.slider-nav')
			.on('init', function(event, slick) {
				$('.slider-nav .slick-slide.slick-current').addClass('is-active');
			})
			.slick({
				slidesToShow: 4,
				slidesToScroll: 7,
				dots: false,
				focusOnSelect: false,
				infinite: false,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				}, {
					breakpoint: 769,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				}, {
					breakpoint: 420,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
				}
				}]
			});
		
		 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
			$('.slider-nav').slick('slickGoTo', currentSlide);
			var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
			$('.slider-nav .slick-slide.is-active').removeClass('is-active');
			$(currrentNavSlideElem).addClass('is-active');
		 });
		
		 $('.slider-nav').on('click', '.slick-slide', function(event) {
			event.preventDefault();
			var goToSingleSlide = $(this).data('slick-index');
		
			$('.slider-single').slick('slickGoTo', goToSingleSlide);
		 });
		 
		
		/* ========================
			WOW ANIMATION
		=============================*/
		
    		new WOW().init();
			
		/* ========================
			DATE/TIME PICKER
		=============================*/
		
		var date = new Date();
		var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		$('#date-picker').datetimepicker({
			format: 'DD.MM.YYYY',
			minDate: today
		});
		$('#time-picker').datetimepicker({
			format: 'LT'
		});
		
		/* ==============================================
			SELECTPICKER
		=============================================== */
		
		$('.selectpicker').selectpicker();

		/* ==============================================
			PRELOADER
		=============================================== */
		
		  
		$(window).load(function() { 
			$("#status").fadeOut("slow"); 
			$("#loader").delay(200).fadeOut(); 
		})
		
		  
		  
		/* ==============================================
			SCROLL UP
		=============================================== */
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
		
		/* ================================================
			COLOR PANEL OPEN/CLOSE
		================================================ */
		 
		 $( "#color-panel .panel-button" ).click(function(){
			$( "#color-panel" ).toggleClass( "close-color-panel", "open-color-panel", 1000 );
			$( "#color-panel" ).toggleClass( "open-color-panel", "close-color-panel", 1000 );
			return false;
		});
		// Color Skins
		$('.switcher').click(function(){
			var title = jQuery(this).attr('title');		
			jQuery('#changeable-colors').attr('href', 'css/colors/' + title + '.css');				
			return false;
		});	
		
		jQuery(".orange-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo.png");
			return false;
		});

		jQuery(".strong-blue-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo2.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo2.png");
			return false;
		});

		jQuery(".moderate-green-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo3.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo3.png");
			return false;
		});

		jQuery(".vivid-yellow-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo4.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo4.png");
			return false;
		});

		/* ==============================================
			PARALLAX
		=============================================== */	
		
		$.fn.parallax = function(options) {
 
			var windowHeight = $(window).height();
	 
			// Establish default settings
			var settings = $.extend({
				speed        : 0.15
			}, options);
	 
			// Iterate over each object in collection
			return this.each( function() {
	 
				// Save a reference to the element
				var $this = $(this);
	 
				// Set up Scroll Handler
				$(document).scroll(function(){
	 
						var scrollTop = $(window).scrollTop();
							var offset = $this.offset().top;
							var height = $this.outerHeight();
	 
				// Check if above or below viewport
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
	 
				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
	 
					 // Apply the Y Background Position to Set the Parallax Effect
					$this.css('background-position', 'center ' + yBgPosition + 'px');
					
				});
			});
		}
	
		$('.parallax').parallax({
			speed : 0.15
		});
		
		 /* ==============================================
			CONTACT FORM
		=============================================== */	
			//  jQuery(document).ready(function() {
			// 	$('#contact-form').submit(function() {
					
			// 		var action = $(this).attr('action');
			// 		// $("#message").slideUp(750, function() {
			// 			$('#message').hide();
			// 			$('#submit')
			// 				.after('<img src="images/loader-animation.gif" class="loader" />')
			// 				.attr('disabled', 'disabled');
			// 			$.post(action, {
							
			// 					first_name: $('#form_name').val(),								
			// 					phone: $('#phone').val(),								
			// 					mealplan: $('#mealplan').val(),
			// 					date:  $('#date-picker').val(),
			// 					area:  $('#localarea').val()
			// 				},
			// 				function(data) {
			// 					document.getElementById('message').innerHTML = data;
			// 					$('#message').slideDown('slow');
			// 					$('#contact-form img.loader').fadeOut('slow', function() {
			// 						$(this).remove()
			// 					});
			// 					$('#submit').removeAttr('disabled');
			// 					if (data.match('success') != null) $('#contact-form').slideUp('slow');
			// 				}
			// 			);
			// 		// });
			// 		return false;
			// 	});
			// });
		 
	
})(jQuery);