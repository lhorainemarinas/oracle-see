jQuery(document).ready(function () {

    var $ = jQuery,
        $window = $(window),
        $document = $(document),
        $body = $("body"),
        $main = $("main"),
        mainContainer = $("main .container"),
        docHeight = $document.innerHeight(),
        winWidth = $window.innerWidth(),
        winHeight = $window.innerHeight(),
        scrolled = $(window).scrollTop();

    /**
     * --------------------------------------------------------------------------
     * EVENTS
     * --------------------------------------------------------------------------
     */

    $window.on('resize', function () {
        updateOnResize();
    });

    $window.on('load', function () {

    });

    var updateOnResize = debounce(function () {
        updateValueOnResize();
        updateStyleOnResize();
    }, 250);

    function updateValueOnResize() {
        winWidth = $window.innerWidth();
        winHeight = $window.innerHeight();
        // bodyFull();
    }

    function updateStyleOnResize() {
        // bodyFull();
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };


    // FULLPAGE RESPONSIVE
    function bodyFull() {
        $main.css({
            width: winWidth,
            height: winHeight
        });
        mainContainer.css('height', winHeight);
    }

    /**
     * --------------------------------------------------------------------------
     * PARTICLES
     * --------------------------------------------------------------------------
     */

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    /**
     * --------------------------------------------------------------------------
     * SMOKE
     * --------------------------------------------------------------------------
     */

    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    canvas.width = innerWidth
    canvas.height = innerHeight

    var party = smokemachine(ctx, [254, 254, 254])
    party.start() // start animating

    onmousemove = function (e) {
        var x = e.clientX
        var y = e.clientY
        var n = .5
        var t = Math.floor(Math.random() * 200) + 3800
        party.addsmoke(x, y, n, t)
    }

    setInterval(function () {
        party.addsmoke(innerWidth / 2, innerHeight, 1)
    }, 100)

    /**
     * --------------------------------------------------------------------------
     * ON LOAD FUNCTIONS
     * --------------------------------------------------------------------------
     */

    new WOW().init();
    
    bodyFull();

});