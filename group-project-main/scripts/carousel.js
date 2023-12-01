$("#next-button").on('click', function() {
    console.log('next');
    nextSlide();
});

$("#prev-button").on('click', function() {
    nextSlide();
});

// $("#dot1").on('click', function() {
//     showSlide(1);
// });

// $("#dot2").on('click', function() {
//     showSlide(2);
// });

// $("#dot3").on('click', function() {
//     showSlide(3);
// });

// $("#dot4").on('click', function() {
//     showSlide(4);
// });

// $("#dot5").on('click', function() {
//     showSlide(5);
// });

// $("#dot6").on('click', function() {
//     showSlide(6);
// });

// $("#dot7").on('click', function() {
//     showSlide(7);
// });


const SLIDES = $('.slides');
const DOTS = $('.feedbackdot');

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($('.slides:not(.hidden)')) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($('.slides:not(.hidden)')) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  DOTS.removeClass("active");
  currentDot.addClass("active");
}
