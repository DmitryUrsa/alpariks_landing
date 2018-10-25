$(function() {

	$( '.icon-link' ).tooltip({
		position: {
        my: "center bottom-20",
        at: "center top",
    },
    content: function () {
              return $(this).prop('title');
          }

	});

	jQuery('#works-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});
