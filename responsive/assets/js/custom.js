$(document).ready(function(){
	

	$(window).resize(function(){
		if($(window).width()<764){
			$('.navigation').slideUp();
			$('.navigation .menu li').slideUp();
		}
		else{
			$('.navigation').slideDown();
			$('.navigation .menu li').slideDown();
		}
	})
	
	$('.nav-button').click(function(){
		$('.navigation').slideToggle();
		$('.navigation .menu li').slideToggle();
	});

	$('.arrow-link .next').click(function(e){
		var image_now = $('.item-display');
		var next_image = image_now.next();

		if(next_image.length == 0){
			next_image = $('.item').first();
		}

		
		image_now.animate({opacity:"toggle"},500,function(){
			next_image.animate({opacity:"toggle"},500,function(){
				image_now.removeClass('item-display').addClass('item-hidden');
				next_image.removeClass('item-hidden').addClass('item-display');
			});
		});
		


		e.preventDefault();


	});
	$('.arrow-link .prev').click(function(e){
		var image_now = $('.item-display');
		var next_image = image_now.prev();

		if(next_image.length == 0){
			next_image = $('.item').last();
		}

		
		image_now.animate({opacity:"toggle"},500,function(){
			next_image.animate({opacity:"toggle"},500,function(){
				image_now.removeClass('item-display').addClass('item-hidden');
				next_image.removeClass('item-hidden').addClass('item-display');
			});
		});


		e.preventDefault();


	});
	$('.coba').click(function(){
		$('.coba').animate({
			opacity:0,
			width:"120%",
			height:"120%"
		},'slow');



	});






	




});