export default {
	state: {
		currentLevel: 'town',
		seconds: 0,
		highScores: {}
	},

	getters: {

		currentLevel(state) {
            return state.currentLevel;
        },

		seconds(state) {
            return state.seconds;
        },

		highScores(state) {
            return state.highScores;
        }

	},

	mutations: {

		currentLevel(state, data) {
			state.currentLevel = data;
		},

		seconds(state, data) {
			state.seconds = data;
		},

		highScores(state, data) {
			state.highScores = data;
		}
	},

	actions: {

		setCurrentLevel(context, data) {
			context.commit('currentLevel', data);
		},

		updateSeconds(context, data) {
			context.commit('seconds', data);
		},

		setHighScoresData(context, data) {
			context.commit('highScores', data);
		}

	}

};
