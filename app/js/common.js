$(document).ready(function () {

function fixedMenu() {
	let nav = $('.header');
	let height = $(nav).offset().top;
	$(window).scroll(function(){
      if ($(window).scrollTop() > height){
      $(nav).addClass('fixed');
		}else {
		  $(nav).removeClass('fixed');
		}
	});
}

fixedMenu();

const swiper = new Swiper('.swiper', {
    autoplay: { delay: 5000 },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
});

});