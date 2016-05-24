$(document).ready(function() {
	// var searchTerm = "cupcakes";
	// $("#search-form").submit(function(event) {
	// 	event.preventDefault();
	// 	searchTerm = $("#search-word").val();
	// 	getRequest(searchTerm);
	// });
});


function showResults(results) {
	var html = "";
	$.each(results, function(index, value) {
		html += "<img src='" + value.snippet.thumbnails.default.url + "'>";
		console.log(value.snippet.thumbnails.default.url);
	});
	$("#search-results").html(html);
};

function getRequest(searchTerm) {
	var params = {
		part: "snippet",
		key: "AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I",
		q: searchTerm
	};
	url = "https://www.googleapis.com/youtube/v3/search/?";
	$.getJSON(url, params, function(data) {
		showResults(data.items);
	});
};
