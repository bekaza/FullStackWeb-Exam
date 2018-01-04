// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import Panel from '@/components/globals/Panel'
import Alert from '@/components/globals/Alert'
Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.component('panel', Panel)
Vue.component('alert', Alert)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
