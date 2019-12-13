var IndexPage = (function () {
	
	init = function() {
		return new Vue({
			el: '#main',
			data: {
				clubs: getSortedClubList()
			}
		});
	}

	getSortedClubList = function() {
		return Storage.clubs.sort((a, b) => {
			return a.title > b.title ? 1 : -1;
		});
	}

	return {
		init: init
	};
})();

$( document ).ready(function() {
	var app = IndexPage.init();
});