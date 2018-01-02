import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users/Index'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'users',
			component: Users
		}
	]
})
