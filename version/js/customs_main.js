/* -- page 1 slider -- */

$(document).ready(function(){
	$('#full-page_slider').smSlider({
		pagination : false,
		subMenu    : true,
		flexible   : true
	});
	$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);



$('#full-page_slider').smSlider({
		pagination : false,
		subMenu    : true,
		flexible   : true
	});
	$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  5000);

});




$(window).load(function(){
	setTimeout(function() {
		$('#loader').css({'display':'none'});
	}, 2000);
	
	$("#slideshow > div:gt(0)").hide();
	
	setInterval(function() { 
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
		},  5000);
	});




$('.bxslider').bxSlider({
	auto: true,
	mode: 'fade',
	pagerCustom: '#bx-pager'
});

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

