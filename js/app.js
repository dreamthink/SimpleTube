$(document).ready(function() {
	$.getJSON("https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I&q=yoga", function(data) {
		showResults(data.items);
	});
});

function showResults(results) {
	var html = "";
	$.each(results, function(index, value) {
		html += "<img src='" + value.snippet.thumbnails.default.url + "'>";
		console.log(value.snippet.thumbnails.default.url);
	});
	$("#search-results").html(html);
};