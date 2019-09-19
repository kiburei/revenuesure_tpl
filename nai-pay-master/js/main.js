$(window).on('load', function() {
  $('#myModal').modal('show');
	function explode(){
 		$('#pop').removeClass('d-none');
		$('#pop').addClass('fadeIn');
		$('.hand-phone').addClass('bounceInUp')
		
}
	
	function popitem(){
		$('.pop-item').addClass('tada');
	}
setTimeout(explode, 5000);
	setTimeout(popitem, 5200);
	
	$('.close-pop').on('click',function(){
		closepop();
	});
	
	
	
	function closepop(){
		setTimeout($('#pop').addClass('d-none'),2000);		
		$('#pop').removeClass('fadeIn');
		$('.pop-item').removeClass('tada');
		
		$('#pop').addClass('zoomOut');
		$('.pop-item').addClass('rollOut');
		
	}
	
	function closereceiptform(){
		setTimeout($('#search-receipt').addClass('d-none'),2000);		
		$('#search-receipt').removeClass('fadeIn');
		$('#get-receipt-container').removeClass('tada');
		
		$('#search-receipt').addClass('zoomOut');
		$('#get-receipt-container').addClass('rollOut');
		
	}
	
	function showreceiptform(){
		$('#search-receipt').removeClass('zoomOut');
		$('#search-receipt').removeClass('d-none');
		$('#search-receipt').addClass('fadeIn');
		$('#get-receipt-container').removeClass('rollOut');
		$('#get-receipt-container').addClass('tada');
	}
	
	$('.close-receipt-form').on('click',function(){
		closereceiptform();
	});
	
	$('#get-a-receipt').on('click',function(){
		showreceiptform();
	});
	
	
});

(function($) {

  function closesublinks() {
    $(".construction1").addClass("left");
    $(".wallet1").addClass("left");
    $(".parking1").addClass("left");
    $(".rent1").addClass("left");
    $(".unified-biz-permit1").addClass("left");
    $('.land-rate1').addClass("left");

  }

  $(".option").on("click", function() {
    checkWidth();
  });
  $(".hidden-links-container").on("click", function() {
    $(this).hide();
  });

  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize < 993) {
      $(".hidden-links-container").css("display", "flex");
    }
  }

  // Execute on load

  $(".option").on("click", function() {
    closesublinks();
    $(this).addClass("active").siblings().removeClass("active");
    $(this).children(".active-triangle").removeClass("display-none");
    $(this).siblings().children(".active-triangle").addClass("display-none");
  });

  $('.business-permit').on("click", function() {
    $('.unified-biz-permit1').removeClass("left");
  });

  $('.construction').on("click", function() {
    closesublinks();
    $('.construction1').removeClass("left");
  });

  $('.E-Wallet').on("click", function() {
    $('.wallet1').removeClass("left");
  });

  $('.rents').on("click", function() {
    $('.rent1').removeClass("left");
  });

  $('.parking').on("click", function() {
    $('.parking1').removeClass("left");
  });

  $('.land-rates').on("click", function() {
    $('.land-rate1').removeClass("left");
  });

  $(".name-discount").on("click", function() {
    $(".toogle-user-container").slideToggle();
  });

  $(".dp").on("click", function() {
    $(".toogle-user-container").slideToggle();
  });

  $(".toogle-user-container").on("click", function() {
    $(".toogle-user-container").slideUp();
  });

  //	payment methods mpesa direct
  $(".m-pesa-direct").on("click", function() {
    $(".m-pesa-direct-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".direct-indicator").css("opacity", "1");


  });

  //	payment methods mpesa standard
  $(".mpesa-standard").on("click", function() {
    $(".m-pesa-standard-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".std-indicator").css("opacity", "1");
  });

  //	payment methods credits
  $(".viza-master").on("click", function() {
    $(".credit-payment-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".visa-indicator").css("opacity", "1");
  });

  //	payment methods airtel
  $(".airtell").on("click", function() {
    $(".airtell-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".airtel-indicator").css("opacity", "1");
  });
	
	
	$('.user-nav .wrap').on('click', function(){
		$('.user-nav .wrap').removeClass('display-tri');
		$('.user-nav .wrap').removeClass('active-item')
		$(this).addClass('display-tri');
		$(this).addClass('active-item');
	});
	
	$('.acount-details-form input').on('change', function(){
		$('.submit-btn').prop("disabled", false);
	})



})(jQuery);

$(document).ready(function() {
  // Toggles the side menu and overlay
  $('.toogle-btn').on('click', function() {
    $(".overlay").toggleClass("display-none");
    // $('.toogle-menu-container').toggleClass('hide show');
  })

  // Closes the side menu and removes the overlay when the overlay is clicked
  $('.overlay').on('click', function() {
    // $('.toogle-menu-container').toggleClass('hide show');
    $(".overlay").toggleClass("display-none");
  })

  // ScrollMagic for Options
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.option',
      triggerHook: 0.7
    }).setClassToggle('.option', 'fade-in')
    .addTo(controller)
});



//this part affects the transactions page
(function($) {
	$(".main-transaction-container").on("click", function(){
		returnpannels();
		var parent=$(this).parent();		
		$(this).addClass("active-transaction").parent().siblings().children("active-transaction").removeClass("active-transaction");
		$(this).siblings(".transaction-more-details").addClass("display-flex");
		$(this).siblings(".transaction-more-details").slideDown();
		parente.siblings(".transaction-more-details").removeClass("display-flex");
		
//		$(".transaction-more-details").eq(index).removeClass("display-none");
//		console.log(index);
		
	});
	
	$(".close-panel-container").on("click", function(){
		$(this).parent().slideUp();	
		$(this).parent().removeClass("display-flex");
	});
	
	
	
	
	function returnpannels()
	{
		$(".main-transaction-container").removeClass("active-transaction");
		$(".transaction-more-details").slideUp();
		$(".transaction-more-details").removeClass("display-flex");
		
	}
	
})(jQuery);

//this part affects the transactions page
