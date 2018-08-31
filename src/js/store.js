import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		char: '',
		seconds: 0,
		inputScore: false,
		message: 'You Win!',
		highScores: [],
		characters: {},
		optionsModalOpen: true,
		guessModalOpen: false,
		messageModalOpen: false
	},

	getters: {

		char(state) {
            return state.char;
        },

		seconds(state) {
            return state.seconds;
        },

		inputScore(state) {
            return state.inputScore;
        },

		message(state) {
            return state.message;
        },

		highScores(state) {
            return state.highScores;
        },

		characters(state) {
            return state.characters;
        },

		optionsModalOpen(state) {
            return state.optionsModalOpen;
        },

		guessModalOpen(state) {
            return state.guessModalOpen;
        },

		messageModalOpen(state) {
            return state.messageModalOpen;
        }

	},

	mutations: {

		char(state, data) {
			state.char = data;
		},

		seconds(state, data) {
			state.seconds = data;
		},

		inputScore(state, data) {
			state.inputScore = data;
		},

		message(state, data) {
			state.message = data;
		},

		highScores(state, data) {
			state.highScores = data;
		},

		characters(state, data) {
			state.characters = data;
		},

		optionsModalOpen(state, bool) {
			state.optionsModalOpen = bool;
		},

		guessModalOpen(state, bool) {
			state.guessModalOpen = bool;
		},

		messageModalOpen(state, bool) {
			state.messageModalOpen = bool;
		}
	},

	actions: {

		updateChar(context, data) {
			context.commit('char', data);
		},

		updateSeconds(context, data) {
			context.commit('seconds', data);
		},

		displayInputScore(context, bool) {
			context.commit('inputScore', bool);
		},

		updateMessage(context, data) {
			context.commit('message', data);
		},

		setHighScores(context, data) {
			context.commit('highScores', data);
		},

		updateCharacters(context, data) {
			context.commit('characters', data);
		},

		toggleOptionsModal(context, bool) {
			context.commit('optionsModalOpen', bool);
		},

		toggleGuessModal(context, bool) {
			context.commit('guessModalOpen', bool);
		},

		toggleMessageModal(context, bool) {
			context.commit('messageModalOpen', bool);
		}

	}

});
