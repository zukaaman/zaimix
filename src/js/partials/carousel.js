$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // dotsContainer: ".blog-3__dots",
    pagination: true,
    responsive:{
      0:{
        items:1,
        dots: true
      },
      720:{
        items:2,
        dots: true
      },
      1200:{
        items:3,
        nav:true
      },
      1920:{
        items:4,
        nav:true
      }
    }
  });


  // var owl = $('.owl-carousel');

  // owl.owlCarousel();
  // $('.customNextBtn').click(function() {
  //     owl.trigger('next.owl.carousel');
  // })
  // $('.customPrevBtn').click(function() {
  //     owl.trigger('prev.owl.carousel', [300]);
  // })
});
