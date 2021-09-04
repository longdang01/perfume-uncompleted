// Search boxes
$('.search-btn').click(function () {
    $('.search-txt').toggleClass('open');
    $('.search-txt').focus();
    $(this).html() == '<i class="fas fa-search"></i>' ? $(this).html('<i class="fas fa-times"></i>') : $(this).html('<i class="fas fa-search"></i>');
});

// Slide
const slideContainer = $('.hero-slide');
const slides = $('.slide-img');

$('.btn-next').click(function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active');
      currentImg.removeClass('rightShow');
      nextImg.addClass('rightShow');
      nextImg.addClass('active');
    } else {
      currentImg.removeClass('active');
      currentImg.removeClass('rightShow');
      $(slides[0]).addClass('rightShow');
      $(slides[0]).addClass('active');
    }
});


$('.btn-prev').click(function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active');
      currentImg.removeClass('rightShow');
      prevImg.addClass('rightShow');
      prevImg.addClass('active')
    } else {
      currentImg.removeClass('active');
      currentImg.removeClass('rightShow');
      $(slides[slides.length - 1]).addClass('rightShow');
      $(slides[slides.length - 1]).addClass('active');
    }
});





 