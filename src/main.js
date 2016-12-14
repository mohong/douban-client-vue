import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import nowplaying from './components/nowplaying/nowplaying.vue';
import comingsoon from './components/comingsoon/comingsoon.vue';
import review from './components/review/review.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/nowplaying': {
		component: nowplaying
	},
	'/comingsoon': {
		component: comingsoon
	},
	'/review': {
		component: review
	}
});

router.start(app, '#app');

router.go('/nowplaying');
