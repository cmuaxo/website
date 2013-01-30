// set up responsive nav
$(document).ready(function(){
	init();
});

function init() {
	bindMenuTrigger();
}

function bindMenuTrigger() {
	console.log('trigger bound');
	$('.icon-menu').bind('click', function(){
		console.log('trigger click');
		toggleMenu(undefined);
	});
}

function toggleMenu(menu) {
	console.log('showmenu');
	if (typeof menu === 'undefined') {
		menu = $('#mobile-nav');
	}
	else {
		menu = $(menu);
	}
	// show menu
	menu.slideToggle({
			duration: 700
		}, 
		function(){console.log('toggled');}
	);
}

// Fixes iPhone Safari viewport scaling bug
(function(doc) {
	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
	    
	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}
	
	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}
}(document));