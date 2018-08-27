import Vue from 'vue'
import App from './App.vue'
import Board from './components/board.vue';

new Vue({
	el: '#app',
	render: h => h(Board)
});
