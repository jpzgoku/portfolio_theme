export default {
	state: {
		currentLevel: 'town',
		seconds: 0,
		inputScore: false,
		highScores: {}
	},

	getters: {

		currentLevel(state) {
            return state.currentLevel;
        },

		seconds(state) {
            return state.seconds;
        },

		inputScore(state) {
            return state.inputScore;
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

		inputScore(state, data) {
			state.inputScore = data;
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

		displayInputScore(context, bool) {
			context.commit('inputScore', bool);
		},

		getHighScoresData(context, data) {
			context.commit('highScores', data);
		}

	}

};
