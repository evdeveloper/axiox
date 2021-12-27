$(document).ready(function() {

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

function sandwich() {
  let body = $('body');
  let overlay = $('.overlay');
  $(document).on('click', '.sandwich', function(e) {
    $(this).toggleClass('active');
    if (!$(this).hasClass('active')) {
      $('.header__menu').removeClass('active');
      $(body).removeClass('hidden');
      $(overlay).fadeOut();
    }else {
      $('.header__menu').addClass('active');
      $(body).addClass('hidden');
      $(overlay).fadeIn();
    }
    return false;
  });

};

sandwich();

$(document).on('click', '.overlay', function(e) {
  $(this).fadeOut();
  $('.header__menu').removeClass('active');
  $('body').removeClass('hidden');
  $('.sandwich').removeClass('active');
  return false;
});

let eventPlaeer = $(".video");

eventPlaeer.RTOP_VideoPlayer({
  fontAwesomeControlIcons: true,
  showSoundControl: true,
  allowPlayPause:true
});

eventPlaeer.on('play.vid.rtop_videoplayer', function(event) {
  console.log(event);
  $('.rtopVideoPlayerWrapper .rtopVideoPlayer .rtopVideoHolder video').css({'opacity': '1'});
})





});