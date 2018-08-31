import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import CustomNavBar from './components/customNavBar.vue';
import Board from './components/board.vue';
import { store } from './js/store';

Vue.use(BootstrapVue);

new Vue({
	el: '#app',
	store,
	components: {
		Board,
		CustomNavBar
	}
})
