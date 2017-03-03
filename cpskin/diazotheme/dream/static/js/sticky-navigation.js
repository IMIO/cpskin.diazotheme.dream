$(document).ready(function(){ 
(function(w,d,undefined){
	var el_html = d.documentElement,
		el_body = d.getElementsByTagName('body')[0],		
		header_miniSite = d.getElementById('container-minisite-globalnav'),
		lastScroll = w.pageYOffset || el_body.scrollTop;
	var header = d.getElementById('top-navigation');
	
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
				navHeight	= header_miniSite.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 100,
				scrollValFix = classFound ? scrollValue : scrollValue + navHeight;
			if (d.getElementsByClassName('in-minisite-in-portal') || d.getElementsByClassName('in-minisite-out-portal') && window.matchMedia("(min-width: 1024px)").matches) {
				
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
			if (header != null) {			
				menuIsStuck( d.getElementById('header') );
			}
			miniSiteMenuIsStuck( d.getElementById('header_miniSite') );
		};
		


	// when you scroll, fire onScrolling() function
	w.addEventListener('scroll', function(){
		w.requestAnimationFrame( onScrolling );
	});


}(window, document));

});