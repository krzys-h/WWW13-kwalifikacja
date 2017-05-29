function getURL(url) {
	return Promise.resolve($.get({url: url, dataType: 'text'}));
}

function getImage(url) {
	return new Promise(function(resolve, reject) {
		var img = $("<img />");
		img.on("load", function() {
			resolve(img);
		});
		img.on("error", reject);
		img.attr('src', url);
	});
}

function showSpinner(show) {
	if(show) {
		$(".spinner").show();
	} else {
		$(".spinner").hide();
	}
}

function display(image, text) {
	$(document.body).append(image);
	$(document.body).append($("<div/>").html(text));
}

var ready = new Promise(function(resolve, reject) {
	showSpinner(false);
	$(document).ready(resolve);
});

