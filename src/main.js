import Vue from 'vue';
import Board from './components/board.vue';
import { store } from './js/store';

window.Event = new Vue();

new Vue({
	el: '#app',
	store,
	components: {
		Board
	}
})
