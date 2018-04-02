$(document).ready(function(){
location.hash = "#pocetna";
tacke();
setTimeout(prvaAnim, 500);
setTimeout(function(){
	// document.getElementsByClassName('pocetak')[0].style.transform = "translateY(-150vh)";
	$('.pocetak').css({'transform': 'translateY(-150vh)'});
}, 10);
$('#wrapper').fullpage({
	anchors: ['pocetna', 'about', 'mystuff', 'contact'],
		navigation: true,
		navigationPosition: 'left'
});
$('#wrapper, #fp-nav, .ikone, .link-home').mousemove(function(e){
    var valueX=(e.pageX * -1 / 40); 
    var valueY=(e.pageY * -1 / 40);
    setTimeout(function(){
   	$('.krug, .s-desna, .zvezde, .oblaci, .tacke').css({'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'});
   }, 50);
});
$(window).bind('hashchange', function () {
    var hash = window.location.hash.slice(1);
    if (hash == "pocetna") {
    	tacke();
    	prvaAnim();
    } else {
    	$('.beli-krug').css({'transform': 'translateX(2000px)'});
    	$('.s1-levo p:nth-child(1)').css({'transform': 'translateX(-620px)'});
		$('.s1-levo p:nth-child(2)').css({'transform': 'translateX(-660px)'});
		$('.s1-levo p:nth-child(3)').css({'transform': 'translateX(-700px)'});
		$('.zvezda:nth-child(1)').css({'transform': 'translateX(1000px) rotate(45deg) scale(.3)'});
		$('.zvezda:nth-child(2)').css({'transform': 'translateX(1000px) scale(.7) rotate(25deg)'});
		$('.zvezda:nth-child(3)').css({'transform': 'translateX(1000px) rotate(192deg)'});
		$('.oblak:nth-child(1)').css({'transform': 'translateX(1000px)'});
		$('.oblak:nth-child(2)').css({'transform': 'translateX(1000px) scale(1.7)'});
		$('.portfolio').fadeOut(1500).css("display", "none");
		$('.link-home').css({'transform': 'translateY(80px)'});
    }
    if (hash == "about") {
    	// dan();
    	tacke();
    	aboutAnim();
    } else {
    	$('.s2-levo p:nth-child(1)').css({'transform': 'translateX(-620px)'});
		$('.s2-levo p:nth-child(2)').css({'transform': 'translateX(-660px)'});
		$('.s2-levo p:nth-child(3)').css({'transform': 'translateX(-700px)'});
		$('.s2-levo p:nth-child(4)').css({'transform': 'translateX(-640px)'});
		$('.s2-levo-p').fadeOut(1000);
		$('.s2-slider').css({
			'transform': 'translateZ(-60px) translatex(40px) translateY(20px)',
			'visibility': 'hidden'
		});
		$('.filter').removeClass('otkrivac');
		$('.crveno').removeClass('crveno-anim');
		tekstStop();
		$('.s2-broj span').removeClass('span-anim');
		
    }
    if (hash == "mystuff") {
    	tacke();
    	mystuffAnim();
    } else {
    	$('.s3-text').removeClass('s3-text-anim');
    	void $('.s3-text').offsetWidth;
    	$('.s3-levo').css({'transform': 'translateX(-620px)'});
    	$('.s3-slider').css({
			'transform': 'translateZ(-60px) translatex(40px) translateY(20px)',
			'visibility': 'hidden'
		});
		$('.filter3').removeClass('otkrivac');
		$('.crveno3').removeClass('crveno-anim');
		$('.s3-broj span').removeClass('span-anim');
    }
    if (hash == "contact") {
    	tacke();
    	contactAnim();
    } else {
    	$('.s4-levo p:nth-child(1)').css({'transform': 'translateX(-620px)'});
		$('.s4-levo .s41s').css({'transform': 'translateX(-690px)'});
		$('.s4-levo .s42s').css({'transform': 'translateX(-720px)'});
		$('.s4-levo a').css({'transform': 'translateX(-650px)'});
		$('.s4-slider').css({
			'transform': 'translateZ(-60px) translatex(40px) translateY(20px)',
			'visibility': 'hidden'
		});
		$('.filter4').removeClass('otkrivac');
		$('.crveno4').removeClass('crveno-anim');
		$('.s4-broj span').removeClass('span-anim');
    }
});
function prvaAnim() {
	$('.beli-krug').css({'transform': 'translateX(-2000px)'});
	$('.s1-levo p:nth-child(1)').css({'transform': 'translateX(620px)'});
	$('.s1-levo p:nth-child(2)').css({'transform': 'translateX(660px)'});
	$('.s1-levo p:nth-child(3)').css({'transform': 'translateX(700px)'});
	$('.zvezda:nth-child(1)').css({'transform': 'translateX(-1000px) rotate(45deg) scale(.3)'});
	$('.zvezda:nth-child(2)').css({'transform': 'translateX(-1000px) scale(.7) rotate(25deg)'});
	$('.zvezda:nth-child(3)').css({'transform': 'translateX(-1000px) rotate(192deg)'});
	$('.oblak:nth-child(1)').css({'transform': 'translateX(-1000px)'});
	$('.oblak:nth-child(2)').css({'transform': 'translateX(-1000px) scale(1.7)'});
	$('.portfolio').fadeIn(1500);
	$('.link-home').css({'transform': 'translateY(-160px)'});
}
var tekstS3 = ["PASSIONATE", "ABOUT", "CODING"];
var tajmer = 0;
var interval; 
function tekstStart() {
	interval = setInterval(tekstS3promena, 3000);
}
function tekstStop() {
	clearInterval(interval);
}
function tekstS3promena() {
	$('.s2-levo-p').text(tekstS3[tajmer]);
	tajmer++
	if ( tajmer >= tekstS3.length ) {
		tajmer = 0;
	}
}
function aboutAnim() {
	$('body').on('click',function(ovo){
		if (!$('.s2-levo p:nth-child(4), .cv, .cv *').is(ovo.target)) {
			$('.cv').removeClass('activeCV');
			$('.cv-dugme').removeClass('cv-butt-actv');
			$('.ikone').fadeIn(500);
			$('#fp-nav').fadeIn(500);
			$('.link-home').fadeIn(500);
		}
	});
	$('.cv span').click(function(){
		$('.cv').removeClass('activeCV');
		$('.cv-dugme').removeClass('cv-butt-actv');
		$('.ikone').fadeIn(500);
		$('#fp-nav').fadeIn(500);
		$('.link-home').fadeIn(500);
	});
	$('.s2-levo p:nth-child(4)').click(function(e){
		$('.cv').addClass('activeCV');
		$('.cv-dugme').addClass('cv-butt-actv');
		$('.ikone').fadeOut(500);
		$('#fp-nav').fadeOut(500);
		$('.link-home').fadeOut(500);
	});
	$('.s2-levo-p').text(tekstS3[0]);
	tekstStart();
	$('.s2-levo-p').fadeIn(1000);
	$('.s2-levo p:nth-child(1)').css({'transform': 'translateX(620px)'});
	$('.s2-levo p:nth-child(2)').css({'transform': 'translateX(660px)'});
	$('.s2-levo p:nth-child(3)').css({'transform': 'translateX(700px)'});
	$('.s2-levo p:nth-child(4)').css({'transform': 'translateX(640px)'});
	$('.s2-slider').css({
		'visibility': 'visible',
		'transform': 'translateZ(60px) translatex(-40px) translateY(-20px)'
	});
	$('.filter').addClass('otkrivac');
	$('.crveno').addClass('crveno-anim');
	$('.s2-broj span').addClass('span-anim');
}
function mystuffAnim() {
	$('.s3-text').addClass('s3-text-anim');
	$('.s3-levo').css({'transform': 'translateX(620px)'});
	$('.s3-slider').css({
		'visibility': 'visible',
		'transform': 'translateZ(60px) translatex(-40px) translateY(-20px)'
	});
	$('.filter3').addClass('otkrivac');
	$('.crveno3').addClass('crveno-anim');
	$('.s3-dugme').click(function(){
		if ($('.s3-dugme').hasClass('s3-dugme-active')) {
			$('.s3-dugme').removeClass('s3-dugme-active');
			$(this).addClass('s3-dugme-active');
		} else {
			$(this).addClass('s3-dugme-active');
		}
	});
	$('.s3-dugme:nth-child(1)').click(function(){
		if ($('.s3-imgs').hasClass('active-img')) {
			$('.s3-imgs').removeClass('active-img');
		}
		$('.s3-imgs:nth-child(1)').addClass('active-img');
	});
	$('.s3-dugme:nth-child(2)').click(function(){
		if ($('.s3-imgs').hasClass('active-img')) {
			$('.s3-imgs').removeClass('active-img');
		}
		$('.s3-imgs:nth-child(2)').addClass('active-img');
	});
	$('.s3-dugme:nth-child(3)').click(function(){
		if ($('.s3-imgs').hasClass('active-img')) {
			$('.s3-imgs').removeClass('active-img');
		}
		$('.s3-imgs:nth-child(3)').addClass('active-img');
	});
	$('.s3-broj span').addClass('span-anim');
}

function contactAnim() {
	$('.s4-levo p:nth-child(1)').css({'transform': 'translateX(620px)'});
	$('.s4-levo .s41s').css({'transform': 'translateX(690px)'});
	$('.s4-levo .s42s').css({'transform': 'translateX(720px)'});
	$('.s4-levo a').css({'transform': 'translateX(650px)'});
	$('.s4-slider').css({
		'visibility': 'visible',
		'transform': 'translateZ(60px) translatex(-40px) translateY(-20px)'
	});
	$('.filter4').addClass('otkrivac');
	$('.crveno4').addClass('crveno-anim');
	$('.s4-broj span').addClass('span-anim');
}

// function noc() {
// 	$('.fixed-bg').css({
//     	'background': 'linear-gradient(#000, #001f3f)'
//     });
//     $('#fp-nav').css({
//     	'background': 'linear-gradient(#000, #001f3f)'
//     });
//     $('.tacka').css('display', 'block');
//     $('.k1').css('background-color', '#667292');
//     $('.k2').css('background-color', '#8d9db6');
//     $('.k3').css('background-color', '#bccad6');
//     $('.k4').css('background-color', '#cfe0e8');
// }
// function dan() {
// 	$('.fixed-bg').css({
//     	'background': 'linear-gradient(#c9ffff, #fff)'
//     });
//     $('#fp-nav').css({
//     	'background': 'linear-gradient(#c9ffff, #fff)'
//     });
//     $('.tacka').css('display', 'none');
//     $('.k1').css('background-color', '#fff963');
//     $('.k2').css('background-color', '#efed4c');
//     $('.k3').css('background-color', '#edeb3b');
//     $('.k4').css('background-color', '#efed26');
// }

function tacke() {
for ( var t = 0; t < document.getElementsByClassName('tacka').length; t++ ) {
	document.getElementsByClassName('tacka')[t].style.display = "none";
	document.getElementsByClassName('tacka')[t].style.left = Math.floor(Math.random() * 89) + 10 + "%";
	document.getElementsByClassName('tacka')[t].style.top = Math.floor(Math.random() * 89) + 10 + "vh";
	}
	$('.tacka').fadeIn(1000);
}

});