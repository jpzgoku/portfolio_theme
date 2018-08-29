import Vue from 'vue';
import Board from './components/board.vue';
import { store } from './js/store';

new Vue({
	el: '#app',
	store,
	components: {
		Board
	}
})
