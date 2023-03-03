/*!
 * ICOCrypto v2.1.0 by Softnio.
**/

var NioApp = (function (jQ, win, doc){
    "use strict";
    var NioApp = {AppInfo: {name: "ICOCrypto", package: "2.1.0", version: "2.1.0", author: "Softnio"} },
        components = {docReady: [], docReadyDefer: [], winLoad: [], winLoadDefer: []};

    jQ(doc).ready(docReady);
    jQ(win).on("load", winLoad);

    function docReady(stmt){
        stmt = (typeof stmt === typeof undefined) ? jQ : stmt;
        components.docReady.concat(components.docReadyDefer).forEach(function(component){ component(stmt); });
    }

    function winLoad(stmt){
        stmt = (typeof stmt === "object") ? jQ : stmt;
        components.winLoad.concat(components.winLoadDefer).forEach(function(component){ component(stmt); });
    }
	
    NioApp.components   = components;
    NioApp.docReady 	= docReady;
    NioApp.winLoad    	= winLoad;

    return NioApp;
}(jQuery, window));

NioApp = function (NioApp, $, window) {
    "use strict";
    
	// is exists @v1.0
	$.fn.exists = function (){
        return this.length > 0;
    };
	
	// Return Check @v1.0
	NioApp.Win = {};
	NioApp.Win.height = $(window).height();
	NioApp.Win.width = $(window).width();

    //// Plugins ////
	/////////////////
	NioApp.Plugins = {};
	
    
    // particlesJS !Plugin @v1.0
	NioApp.Plugins.particles = function () {
        var $particles_bg = $('.particles-bg');
        if ($particles_bg.exists()) {
            $particles_bg.each(function(){
                var $self = $(this), $self_id = $self.attr('id'),
                    _pt_base        = ($self.data('pt-base')) ? $self.data('pt-base') : '#fff', 
                    _pt_base_op     = ($self.data('pt-base-op')) ? parseFloat($self.data('pt-base-op')) : 0.10, 
                    _pt_shape       = ($self.data('pt-shape')) ? $self.data('pt-shape') : '#fff', 
                    _pt_shape_op    = ($self.data('pt-shape-op')) ? parseFloat($self.data('pt-shape-op')) : 0.10, 
                    _pt_line        = ($self.data('pt-line')) ? $self.data('pt-line') : '#fff',
                    _pt_line_op     = ($self.data('pt-line-op')) ? parseFloat($self.data('pt-line-op')) : 0.20;
                
                particlesJS($self_id, {
                "particles": {
                    "number": {
                        "value": 30,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": _pt_base,
                    },
                    "shape": {
                        "type": "circle",
                        "opacity": _pt_shape_op,
                        "stroke": {
                            "width": 0,
                            "color": _pt_shape,
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": _pt_base_op,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.12,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 6,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.08,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": _pt_line,
                        "opacity": _pt_line_op,
                        "width": 1.3
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
                            "enable": true, 
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true, 
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                        "distance": 400,
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
                }
                // Stop here.
              );
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.particles);
        
	return NioApp;
}(NioApp, jQuery, window, document);
/* END @iO */
