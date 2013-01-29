// Swipe right to open panel
$(document).on('swiperight', function(event, ui) {
  $('#page-header').panel('open', {display: 'reveal', position: 'left'} );
});

// Swipe left to close panel
$(document).on('swipeleft', function(event, ui) {
  $('#page-header').panel('close');
});

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