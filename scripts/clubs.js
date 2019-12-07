var SettingsPage = (function () {
	
	init = function() {
		initSettings();
	}

	initSettings = function() {
		var settings = Storage.clubs.sort((a, b) => {
			return a.title > b.title ? 1 : -1;
		});
	
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
					</div>
					${buildLogo(setting)}
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
							${buildGoogleMapsLink(setting)}
						</address>
					</div>
					<div class="social-links text-center">
						${buildLinks(setting.links)}
					</div>
					<div class="tags">
						${buildCost(setting)}
						${buildTags(setting)}
					</div>
					<small class="d-block text-right mt-3"></small>
				</div>`
	}

	buildCost = function(setting) {
		if (setting.cost === 'free') {
			return `<span class="badge badge-success text-right">free</span>`;
		} else if (setting.cost === 'paid') {
			return `<span class="badge badge-danger text-right">paid</span>`;
		} else if (setting.cost) {
			return `<span class="badge badge-danger text-right">${setting.cost}</span>`;
		} else {
			return `<span class="badge badge-secondary text-right">unknown cost</span>`;
		}
	}

	buildTags = function(setting) {
		var tags = '';
		setting.tags.forEach(tag => {
			tags += ` <span class="badge badge-info text-right">${tag}</span>`;
		});

		return tags;
	}

	buildLogo = function(setting) {
		if (!setting.logo) {
			return '';
		}

		return `<img class="logo row" src="./resources/logo/${setting.logo}" alt="${setting.title} logo" />`;
	}

	buildGoogleMapsLink = function(setting) {
		if (!setting.location.map) {
			return '';
		}

		return `<a class="map-link" href="${setting.location.map}" target="_blank" title="Google maps"><i class="fas fa-external-link-alt"></i></a>`;
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
				case 'twitter':
					iconClass = "fab fa-twitter";
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