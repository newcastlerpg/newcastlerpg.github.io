Vue.component('footer-component', {
    data: function() {
        return {
            year: (new Date()).getFullYear()
        }
    },
    template: `<footer class="py-5 bg-dark">
                    <div class="container">
                        <p class="m-0 text-center text-white">
                            <small>Created by</small> &copy; Kraken Roleplaying Club Newcastle <small>{{ year }}</small>
                        </p>
                    </div>
                </footer>`
});