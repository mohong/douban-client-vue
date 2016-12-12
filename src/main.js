import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import comingSoon from './components/coming_soon/coming_soon.vue';
import inTheaters from './components/in_theaters/in_theaters.vue';
import review from './components/review/review.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/coming_soon': {
		component: comingSoon
	},
	'/in_theaters': {
		component: inTheaters
	},
	'/review': {
		component: review
	}
});

router.start(app, '#app');

router.go('/in_theaters');
