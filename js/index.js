function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.header-menu').addClass('isShow');
    $('.header-menu-img').hide();
    $('.header-menu-img2').show();
    $('.header-menu-search').css('display', 'flex');
  } else {
    $('.header-menu').removeClass('isShow');
    $('.header-menu-img').show();
    $('.header-menu-img2').hide();
    $('.header-menu-search').hide();
  }
}

$(function () {
  $(window).scroll(function () {
    var windowsize = $(window).width();
    if (windowsize > 992) {
      scrollFunction();
    } else {
      $('.header-menu').removeClass('isShow');
      $('.header-menu-nav').removeClass('isMenu');
      $('.header-menu-img').show();
      $('.header-menu-img2').hide();
      $('.header-menu-search').hide();
      $('#menuOpen').show();
      $('#menuClose').hide();
    }
  });
});

$('#menuOpen').click(function () {
  $('#menuOpen').hide();
  $('#menuClose').show();
  $('.header-menu-nav').addClass('isMenu');
  $('.header-menu-img').hide();
  $('.header-menu-img2').show();
  $('.header-menu-search').css('display', 'flex');
});

$('#menuClose').click(function () {
  $('#menuOpen').show();
  $('#menuClose').hide();
  $('.header-menu-nav').removeClass('isMenu');
  $('.header-menu-img').show();
  $('.header-menu-img2').hide();
  $('.header-menu-search').hide();
});

const slider = document.querySelector('.discover');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
