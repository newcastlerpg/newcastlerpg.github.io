var SettingsPage = (function () {
	
	init = function() {
		initSettings();
	}

	initSettings = function() {
		var settings = Storage.clubs;
	
		// Bind club details
		settings.forEach(setting => {
			appendClub(setting);
		});
	}
	
	appendClub = function(setting) {
		var container = buildClub(setting);
		$('#container-clubs').append(container);
	}

	buildClub = function(setting) {
		return `<div class="my-3 p-3 bg-white rounded shadow-sm">
					<div class="row border-bottom border-gray pb-2 mb-0">
						<h4 class="col-md-10">
							${setting.title}
						</h4>
						<h4 class="col-md-2 social-links">${buildLinks(setting.links)}</h4>
					</div>
					
					<p class="pb-3 pt-3 mb-0">
						${setting.description}
					</p>
					<div class="row">
						<h6 class="col-md-2 mb-0">When</h6>
						<p class="col-md-10 mb-0">${setting.when}</p>
					</div>
					<div class="row">
						<h6 class="col-md-2 mb-0">Where</h6>
						<address class="col-md-10 mb-0">
							<strong>${setting.location.title}</strong><br />
							${setting.location.address} 
							<a class="map-link" href="${setting.location.map}" target="_blank" title="Google maps"><i class="fas fa-external-link-alt"></i></a>
						</address>
					</div>					
					<small class="d-block text-right mt-3"></small>
				</div>`
	}

	buildLinks = function(links) {
		var anchorText = '';
		links.forEach(link => {
			var iconClass = "fas fa-external-link-alt";
			switch(link.title.toLowerCase())
			{
				case 'discord':
					iconClass = "fab fa-discord";
					break;
				case 'facebook':
					iconClass = "fab fa-facebook";
					break;
			}

			anchorText += ` <a href="${link.url}" title="${link.title}"><i class="${iconClass}"></i></a>`;
		});

		return anchorText;
	}

	return {
		init: init
	};
})();

$( document ).ready(function() {
	SettingsPage.init();
});