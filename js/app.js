$(document).ready(function() {
	$("#search-form").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#search-word").val();
		getRequest(searchTerm);
		$("#search-form")[0].reset();
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
			media : {}
			}
		});
	});

	function showResults(results) {
		var html = "";
		$.each(results, function(index, value) {
			if (value.id.kind == "youtube#video") {
			  // html += "<div class='col-md-12 box'><a class='fancybox-media' href='https://www.youtube.com/watch?v=" + value.id.videoId + "'>" + "<p>" + value.snippet.title + "</p>" + "<img class='box-image' src='" + value.snippet.thumbnails.medium.url + "'></a></div>";
				html += "<div class='box-wrapper'><div class='col-md-3 col-sm-6 box'><a class='fancybox-media' href='https://www.youtube.com/watch?v=" + value.id.videoId + "'>" + "<div class='title'>" + value.snippet.title + "</div>" + "<img class='box-image' src='" + value.snippet.thumbnails.medium.url + "'></a></div></div>";
			} else {
				html += "";
			}
			console.log(value.snippet.thumbnails.medium.url);
		});
		$(".search-results").html(html);

				$(".box").hover(function() {
					$(this).css("border-color", "red");
					}, function(){
					$(this).css("border-color", "white");
				});
	}

	function getRequest(searchTerm) {
		url = "https://www.googleapis.com/youtube/v3/search/?";
		var params = {
			part: "snippet",
			key: "AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I",
			q: searchTerm,
			type: "video",
			maxResults: 48
		};
		$.getJSON(url, params, function(data) {
			showResults(data.items);
		});
	}

});


// $(document).ready(function() {
// 	$.getJSON("https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyAxtqf8F_Mrn0R5-_xVtuJqYBEmblG_Y2I&q=lady%20gaga", function(data) {
// 		console.log(data);
// 	});
// });
