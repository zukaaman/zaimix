document.addEventListener("DOMContentLoaded", function(event) {
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      dotsContainer: ".blog-3__dots",
      navContainer: ".blog-3__nav",
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
          nav:true,
          navText : ["",""]
        },
        1920:{
          items:4,
          nav:true,
          navText : ["",""]
        }
      }
    });
  });
});
