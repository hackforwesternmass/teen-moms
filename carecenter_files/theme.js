jQuery.noConflict();

jQuery(document).ready(function($){
 	$("ul.sf-menu > .page-item-14 > ul").remove();
 	$("ul.sf-menu > li.current_page_item").addClass("current");
 	$("ul.sf-menu > li.current_page_item").parent().parent().addClass("current");
 	$("ul.sf-menu").superfish({
 		 pathClass:  'current'
 	});
	
	$(".slug-contact-us fieldset").eq(2).addClass("confirmation");
	$("input,textarea").focus(function() {
		$(this).parent().addClass("curFocus");
	});
	$("input,textarea").blur(function() {
		$(this).parent().removeClass("curFocus")
	});

	$('.cycle').cycle({
		speed: 1500,
		random: 1,
		timeout: 5000
	});

	$('#commentform').validate({
		rules: {
			author: {
				required: true
			},
			email: { 
				required: true,
				email: true
			},
			url: {
				url: true
			},
			comment: "required"
		},
		messages: {
			author: {
				required: "Please enter your name"
			},
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address,<br/> example: you@yourdomain.com"
			},
			url: {
				url: "Please enter a valid url,<br/> example: http://www.yourdomain.com"
			},
			comment: {
				required: "Please enter your comment"
			}
		}
	});
	$('#contactform').validate({
		rules: {
			contactName: {
				required: true
			},
			email: { 
				required: true,
				email: true
			},
			url: {
				url: true
			},
			message: "required"
		},
		messages: {
			contactName: {
				required: "Please enter your name"
			},
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address,<br/> example: you@yourdomain.com"
			},
			url: {
				url: "Please enter a valid url,<br/> example: http://www.yourdomain.com"
			},
			message: {
				required: "Please enter your comment"
			}
		}
	});
	
 });
