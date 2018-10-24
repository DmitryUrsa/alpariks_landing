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

});
