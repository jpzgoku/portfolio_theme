import Vue from 'vue';

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// Vue Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisH, faCopyright, faGithub, faLinkedin);
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Custom Components
import PortfolioNavBar from './components/portfolioNavBar.vue';
import PortfolioFooter from './components/portfolioFooter.vue';
import Homepage from './components/homepage.vue';
import WheresWaldo from './components/wheresWaldo.vue';
import DragonBallBattleship from './components/dragonBallBattleship.vue';
import Minesweeper from './components/minesweeper.vue';
import Resume from './components/resume.vue';
import { store } from './js/store/store';

new Vue({
	el: '#app',
	store,
	components: {
		PortfolioNavBar,
		PortfolioFooter,
		Homepage,
		WheresWaldo,
		DragonBallBattleship,
		Minesweeper,
		Resume
	}
})
