$(document).ready(function(){
	// options
	var speed = 500; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 5000; //auto slider speed
	
	// add first initial active class
	$(".slide1").first().addClass("active1");
	$(".slide2").first().addClass("active2");
	$(".slide3").first().addClass("active3");
	$(".slide4").first().addClass("active4");
	
	// hide all slides
	$(".slide1").hide();
	$(".slide2").hide();
	$(".slide3").hide();
	$(".slide4").hide();
	
	// show only active class slide
	$(".active1").show();
	$(".active2").show();
	$(".active3").show();
	$(".active4").show();
	

  	// Next Event Handler
	$('#next').on('click', nextSlide1);// call function nextSlide
	$('#prev').on('click', prevSlide1);// call function prevSlide
	
	// Prev Event Handler
	$('#next2').on('click', nextSlide2);// call function nextSlide
	$('#prev2').on('click', prevSlide2);// call function prevSlide	
	
	
	// Prev Event Handler
	$('#next3').on('click', nextSlide3);// call function nextSlide
	$('#prev3').on('click', prevSlide3);// call function prevSlide

	// Prev Event Handler
	$('#next4').on('click', nextSlide4);// call function nextSlide
	$('#prev4').on('click', prevSlide4);// call function prevSlide 



	
	// Switch to next slide
	function nextSlide1(){
		$('.active1').removeClass('active1').addClass('oldActive1');
		if($('.oldActive1').is(':last-child')){
			$('.slide1').first().addClass('active1');
		} else {
			$('.oldActive1').next().addClass('active1');
		}
		$('.oldActive1').removeClass('oldActive1');
		$('.slide1').fadeOut(speed);
		$('.active1').fadeIn(speed);
	}
		function nextSlide2(){
		$('.active2').removeClass('active2').addClass('oldActive2');
		if($('.oldActive2').is(':last-child')){
			$('.slide2').first().addClass('active2');
		} else {
			$('.oldActive2').next().addClass('active2');
		}
		$('.oldActive2').removeClass('oldActive2');
		$('.slide2').fadeOut(speed);
		$('.active2').fadeIn(speed);
	}
	function nextSlide3(){
		$('.active3').removeClass('active3').addClass('oldActive3');
		if($('.oldActive3').is(':last-child')){
			$('.slide3').first().addClass('active3');
		} else {
			$('.oldActive3').next().addClass('active3');
		}
		$('.oldActive3').removeClass('oldActive3');
		$('.slide3').fadeOut(speed);
		$('.active3').fadeIn(speed);
	}
	
	function nextSlide4(){
		$('.active4').removeClass('active4').addClass('oldActive4');
		if($('.oldActive4').is(':last-child')){
			$('.slide4').first().addClass('active4');
		} else {
			$('.oldActive4').next().addClass('active4');
		}
		$('.oldActive4').removeClass('oldActive4');
		$('.slide4').fadeOut(speed);
		$('.active4').fadeIn(speed);
	}
	
	
	// Switch to prev slide
	function prevSlide1(){
		$('.active1').removeClass('active1').addClass('oldActive1');
		if($('.oldActive1').is(':first-child')){
			$('.slide1').last().addClass('active1');
		} else {
			$('.oldActive1').prev().addClass('active1');
		}
		$('.oldActive1').removeClass('oldActive1');
		$('.slide1').fadeOut(speed);
		$('.active1').fadeIn(speed);
	}
	
	function prevSlide2(){
		$('.active2').removeClass('active2').addClass('oldActive2');
		if($('.oldActive2').is(':first-child')){
			$('.slide2').last().addClass('active2');
		} else {
			$('.oldActive2').prev().addClass('active2');
		}
		$('.oldActive2').removeClass('oldActive2');
		$('.slide2').fadeOut(speed);
		$('.active2').fadeIn(speed);
	}
    
	function prevSlide3(){
		$('.active3').removeClass('active3').addClass('oldActive3');
		if($('.oldActive3').is(':first-child')){
			$('.slide3').last().addClass('active3');
		} else {
			$('.oldActive3').prev().addClass('active3');
		}
		$('.oldActive3').removeClass('oldActive3');
		$('.slide3').fadeOut(speed);
		$('.active3').fadeIn(speed);
	}

	function prevSlide4(){
		$('.active4').removeClass('active4').addClass('oldActive4');
		if($('.oldActive4').is(':first-child')){
			$('.slide4').last().addClass('active4');
		} else {
			$('.oldActive4').prev().addClass('active4');
		}
		$('.oldActive4').removeClass('oldActive4');
		$('.slide4').fadeOut(speed);
		$('.active4').fadeIn(speed);
	}
	
	
	
	
	
	
	
});