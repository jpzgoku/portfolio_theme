export let store = {
	char: '',
	seconds: 0,
	scores: false,
	message: 'You Win!',
	highScores: [],
	characters: {},
	guessModalOpen: false,

	toggleGuessModal() {
		this.guessModalOpen = !this.guessModalOpen;
	}


}
