new Splide( '.splide', {
    type   : 'loop',
    gap: 35,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 4000,
    pauseOnFocus: false,
    accessibility: false,
    breakpoints: {
		640: {
            padding: {
                right: '1rem',
                left : '1rem',
            },
        },

        991.98: {
            padding: {
                right: '5rem',
                left : '5rem',
            },
        }
    },
	padding: {
		right: '10rem',
		left : '10rem',
    },
    
} ).mount();

