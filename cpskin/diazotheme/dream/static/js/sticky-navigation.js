$(document).ready(function(){ 
(function(w,d,undefined){
	var el_html = d.documentElement,
		el_body = d.getElementsByTagName('body')[0],
		header = d.getElementById('top-navigation'),
		banner = d.getElementById('cpskin-banner'),
		menuIsStuck = function(triggerElement) {
			var _scrollTop	= w.pageYOffset || el_body.scrollTop,
				regexp		= /(nav\-is\-stuck)/i,
				classFound	= el_html.className.match( regexp ),
				navHeight	= header.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 100,
				scrollValFix = classFound ? scrollValue : scrollValue + navHeight;
			if (window.matchMedia("(min-width: 1024px)").matches){
				// if scroll down is 100 or more and nav-is-stuck class doesn't exist
				if ( _scrollTop > scrollValFix && !classFound ) {
					el_html.className = el_html.className + ' nav-is-stuck';
				}

				// if nav-is-stuck class exists
				if ( _scrollTop <= 2 && classFound ) {
					el_html.className = el_html.className.replace( regexp, '' );
				}
			}
			
			
		},
		
		miniSiteMenuIsStuck = function(triggerElement) {
			var _scrollTop	= w.pageYOffset || el_body.scrollTop,
				regexp		= /(nav\-is\-Substuck)/i,
				classFound	= el_html.className.match( regexp ),
				navHeight	= header.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 100,
				
				scrollValFix = classFound ? scrollValue : scrollValue + navHeight;
				
			if (d.getElementById('container-minisite-globalnav')&& window.matchMedia("(min-width: 1024px)").matches) {
				
                // if scroll down is 100 or more and nav-is-Substuck class doesn't exist
				if ( _scrollTop > scrollValFix && !classFound ) {
					el_html.className = el_html.className + ' nav-is-Substuck';
				}

				// if nav-is-Substuck class exists
				if ( _scrollTop <= 2 && classFound ) {
					el_html.className = el_html.className.replace( regexp, '' );
				}
            }
			
		},

		onScrolling = function() {
			// this function fires menuIsStuck()…
			menuIsStuck( d.getElementById('header') );
			// and could do more stuff below
			miniSiteMenuIsStuck( d.getElementById('container-minisite-globalnav') );
		};


	el_html.className = el_html.className + ' js';

	// when you scroll, fire onScrolling() function
	w.addEventListener('scroll', function(){
		w.requestAnimationFrame( onScrolling );
	});


}(window, document));

});