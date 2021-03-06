import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
