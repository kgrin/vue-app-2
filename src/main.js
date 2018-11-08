import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import BlogPost from './components/BlogPost.vue'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		}, {
			path: '/blog',
			component: Blog
		}, {
			path: '/blog/post/:id',
			component: BlogPost,
			props: true
		}
	]
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
