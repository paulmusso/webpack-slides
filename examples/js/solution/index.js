require.ensure(['./hello'], function(require) {
	const hello = require('./hello');
	$(function() {
		$(`<h1>${hello()}</h1>`)
			.appendTo(document.body);
	});
});