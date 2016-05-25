$(document).ready(function() {
	$("#search-form").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#search-word").val();
		getRequest(searchTerm);
		$("#search-form")[0].reset();
	});
});

function showResults(results) {
	var html = "";
	$.each(results, function(index, value) {
		html += "<li><a href='https://www.youtube.com/watch?v=" + encodeURIComponent(value.id.videoId) + "'>" + "<img src='" + value.snippet.thumbnails.medium.url + "'></a></li>";
		console.log(value.snippet.thumbnails.medium.url);
	});
	$("#search-results ul").html(html);
};

function getRequest(searchTerm) {
	url = "https://www.googleapis.com/youtube/v3/search/?";
	var params = {
		part: "snippet",
		key: "AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I",
		q: searchTerm
	};
	$.getJSON(url, params, function(data) {
		showResults(data.items);
	});
};




// $(document).ready(function() {
// 	$.getJSON("https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I&q=meditation", function(data) {
// 		console.log(data);
// 	});
// });

