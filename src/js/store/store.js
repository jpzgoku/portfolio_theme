import Vue from 'vue';
import Vuex from 'vuex';

import WheresWaldo from './modules/wheresWaldo';
import DragonBallBattleship from './modules/dragonBallBattleship';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		WheresWaldo,
		DragonBallBattleship
	}
});
