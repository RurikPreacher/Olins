$(document).ready(function(){
    /* Mobile Menu */
    $('.mobile_nav').on('click', function() {
      $('.mobile_navigation_box').show();
      $(this).hide();
      $('.mobile_nav_close').show();
    });
    $('.mobile_nav_close').on('click', function() {
      $('.mobile_navigation_box').hide();
      $(this).hide();
      $('.mobile_nav').show();
    });

    $('.top_slider').slick({
		
    });

    $('.team_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // arrows: false,
      appendArrows: '.arrows',
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  });