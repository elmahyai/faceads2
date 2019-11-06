	$(".js-height-full").height($(window).height() - 91);

	$('.header').affix({
	    offset: {
	        top: 100,
	        bottom: function() {
	            return (this.bottom = $('.footer').outerHeight(true))
	        }
	    }
	});

	$(window).load(function() {
	    $("#preloader").on(500).fadeOut();
	    $(".preloader").on(600).fadeOut("slow");
	});

    $('#play').click(function () {
        $(".loader").css({
            display: 'block',
			margin: '20px auto 0',
			'vertical-align': 'middle',
		});
        $("#preloader").css({
            display: 'block',
            margin: '0 auto ',
            'vertical-align': 'middle',
            width: '100%',
        	height: '100%',
        	top: '0',
        	right: '0',
        	bottom: '0',
        	left: '0',
        	background: '#030306',
        	'z-index': '11000',
        	position: 'fixed',
        	display: 'block'
        });
        $(".preloader").css({
            position: 'absolute',
			display: 'block',
        	margin: '0 auto',
        	left: '1%',
        	right: '1%',
        	top: '47%',
        	width: '100px',
        	height: '100px',
			background: 'center center no-repeat none',
			'background-size': '65px 65px',
			'border-radius': '50%'
        });
        $("#preloader").fadeOut(2900);
        $(".preloader").fadeOut(2000);
    });