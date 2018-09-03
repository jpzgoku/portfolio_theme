import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import CustomNavBar from './components/customNavBar.vue';
import WheresWaldo from './components/wheresWaldo.vue';
import DragonBallBattleship from './components/dragonBallBattleship.vue';
import { store } from './js/store/store';

Vue.use(BootstrapVue);

new Vue({
	el: '#app',
	store,
	components: {
		CustomNavBar,
		WheresWaldo,
		DragonBallBattleship
	}
})
