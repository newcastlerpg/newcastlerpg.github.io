Vue.component('club-logo', {
    props: ['setting'],
    data: function() {
        return {
            source: `./resources/logo/${this.setting.logo}`,
            altText: `${this.setting.title} logo`
        }
    },
    template: `<img class="logo row" v-bind:src="source" v-bind:alt="altText" />`
});

Vue.component('club-address', {
    props: ['setting'],
    template: `<address class="col-md-10 mb-0">
                    <strong>{{ setting.location.title }}</strong><br />
                    {{ setting.location.address }}
                    <a v-if="setting.location.map" class="map-link" v-bind:href="setting.location.map" target="_blank" title="Google maps"><i class="fas fa-external-link-alt"></i></a>
                </address>`
});

Vue.component('club-link', {
    props: ['link'],
    data: function() {
        var iconClass = "fas fa-external-link-alt";
        switch(this.link.title.toLowerCase())
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

        return {
            iconClass: iconClass
        };
    },
    template: `<a v-bind:href="link.url" v-bind:title="link.title"><i v-bind:class="iconClass"></i></a>`
});

Vue.component('club-cost', {
    props: ['setting'],
    data: function() {
        if (this.setting.cost === 'free') {
            return {
                costClass: 'badge badge-success mr-1',
                message: 'free'
            };
		} else if (this.setting.cost === 'paid') {
			return {
                costClass: 'badge badge-danger mr-1',
                message: 'paid'
            };
		} else if (this.setting.cost) {
			return {
                costClass: 'badge badge-danger mr-1',
                message: this.setting.cost
            };
		} else {
			return {
                costClass: 'badge badge-secondary mr-1',
                message: 'unknown cost'
            };
		}
    },
    template: `<span v-bind:class="costClass" >{{ message }}</span>`
});

Vue.component('club-tag', {
    props: ['tag'],
    template: `<span class="badge badge-info mr-1">{{ tag }}</span>`
});

Vue.component('club', {
    props: ['setting'],
    template: `<div class="my-3 p-3 bg-white rounded shadow-sm">
                    <div class="row border-bottom border-gray pb-2 mb-0">
                        <h4 class="col-md-10">
                            {{ setting.title }}
                        </h4>
                    </div>
                    <club-logo v-if="setting.logo" v-bind:setting="setting"></club-logo>
                    <p class="pb-3 pt-3 mb-0">
                        {{ setting.description }}
                    </p>
                    <div class="row">
                        <h6 class="col-md-2 mb-0">When</h6>
                        <p class="col-md-10 mb-0">{{ setting.when }}</p>
                    </div>
                    <div class="row">
                        <h6 class="col-md-2 mb-0">Where</h6>
                        <club-address v-bind:setting="setting"></club-address>
                    </div>
                    <div class="social-links text-center">
                        <club-link v-for="link in setting.links" v-bind:key="link.title" v-bind:link="link"></club-link>
                    </div>
                    <div class="tags">
                        <club-cost v-bind:setting="setting"></club-cost>
                        <club-tag v-for="tag in setting.tags" v-bind:key="tag" v-bind:tag="tag"></club-tag>
                    </div>
                    <small class="d-block text-right mt-3"></small>
                </div>`
});