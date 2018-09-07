export default {
	state: {
		seconds: 0,
		inputScore: false,
		highScores: []
	},

	getters: {

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

		updateSeconds(context, data) {
			context.commit('seconds', data);
		},

		displayInputScore(context, bool) {
			context.commit('inputScore', bool);
		},

		setHighScores(context, data) {
			context.commit('highScores', data);
		}

	}

};
