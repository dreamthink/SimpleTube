$(document).ready(function() {
	$.getJSON("https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I&q=yoga", function(data){
		var myData = data.items;
		$.each(myData, function(index, value) {
			console.log(value.snippet.thumbnails.default.url);
		});
	});
});
