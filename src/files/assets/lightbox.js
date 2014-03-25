if (document.querySelector) {
	(function(){
	
	var lightbox = document.getElementById('lightbox'),
	    iframe = lightbox.querySelector('iframe'),
	    close = lightbox.querySelector('a');
	
	var links = document.querySelectorAll('[rel="lightbox"]');
	
	for(var i=0, link; link = links[i++];) {
		link.onclick = function () {
			lightbox.className = 'open';
			
			var me = this;
			setTimeout(function () {
				iframe.src = me.href;
			}, 1500)
			
			return false;
		};
	}

	close.onclick = function () {
		lightbox.className = 'closed';
		iframe.src = 'about:blank';
		return false;
	};
	
	})();
}