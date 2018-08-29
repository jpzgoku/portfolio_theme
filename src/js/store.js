import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		char: '',
		seconds: 0,
		scores: false,
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

		scores(state) {
            return state.scores;
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

		scores(state, data) {
			state.scores = data;
		},

		message(state, data) {
			state.message = data;
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

		showScores(context, bool) {
			context.commit('scores', bool);
		},

		updateMessage(context, data) {
			context.commit('message', data);
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
