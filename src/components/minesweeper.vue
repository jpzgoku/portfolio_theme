<template lang="html">
	<div>
		<h1 class="text-center m-5">Minesweeper</h1>

		<div class="text-center">
			<b-button variant="secondary" @click="beginner">Beginner</b-button>
			<b-button variant="secondary" @click="intermediate">Intermediate</b-button>
			<b-button variant="secondary" @click="expert">Expert</b-button>
		</div>

		<div class="text-center">
			<div id="gameBoard" class="m-4">
				<div id="flagCounter" class="float-left">{{ flagCounter }}</div>
				<button class="smileyFace" @click="clearGame"></button>
				<div id="timer" class="float-right">{{ seconds }}</div>

				<table>
					<tr v-for="row in rows">
						<td v-for="column in columns"
							:data="row + '-' + column"
							:ref="row + '-' + column"
							@click="guess"
							@contextmenu="mark">
						</td>
					</tr>
				</table>

			</div>
		</div>

	</div>
</template>

<script>
import Util from '../js/util';

export default {
	name: 'minesweeper',

	computed: {

		flagCounter() {
			return this.numMines - this.numFlags;
		}

	},

	data() {
		return {
			rows: 9,
			columns: 9,
			numMines: 10,
			numFlags: 0,
			seconds: 0,
			timer: '',
			isFirstGuess: true,
			gameInProgress: false,
			gameHasEnded: false,
			checkingFlags: false,
			allClasses: [
				'mine',
				'flag',
				'questionMark',
				'x',
				'red',
				'clicked',
				'one',
				'two',
				'three',
				'four',
				'five',
				'six',
				'seven',
				'eight'
			],
			mines: [],
			flaggedCells: [],
			guessedCells: [],
		}
	},

	mounted() {
		this.beginner();
	},

	methods: {

		beginner() {
			this.rows = 9;
			this.columns = 9;
			this.numMines = 10;
			this.clearGame();
		},

		intermediate() {
			this.rows = 16;
			this.columns = 16;
			this.numMines = 40;
			this.clearGame();
		},

		expert() {
			this.rows = 16;
			this.columns = 30;
			this.numMines = 99;
			this.clearGame();
		},

		clearGame() {
			this.seconds = 0;
			this.numFlags = 0;
			this.isFirstGuess = true;
			this.gameInProgress = false;
			this.gameHasEnded = false;
			this.checkingFlags = false;
			this.mines = [];
			this.flaggedCells = [];
			this.guessedCells = [];
			this.stopTimer();
			Util.clearBoard(...this.allClasses);
			this.placeMines();
			this.innerHTMLData();
		},

		placeMines() {
			if (this.mines.length === this.numMines) {
				console.log(this.mines);
				return false;
			}

			var row = Math.floor(Math.random() * (this.rows)) + 1;
			var column = Math.floor(Math.random() * (this.columns)) + 1;
			var newMine = `${row}-${column}`;

			if (!this.mines.includes(newMine)) {
				this.mines.push(newMine);
			}
			this.placeMines();
		},

		innerHTMLData() {
			for (var row = 1; row <= this.rows; row++) {
				for (var column = 1; column <= this.columns; column++) {
					this.findSurroundingCellData(row, column);
				}
			}
		},

		findSurroundingCellData(row, column) {
			var surrounding = 0;

			this.validSurroundingCells(row, column).map(cell => {
				for (var mine in this.mines) {
					if (cell === this.mines[mine]) {
						surrounding++;
					}
				}
			});

			var td = `${row}-${column}`;
			this.$refs[td][0].innerHTML = surrounding;
		},

		guess(e) {
			if (!this.gameInProgress) {
				this.gameInProgress = true;
				this.startTimer();
			}

			var cell = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			if (this.guessedCells.includes(cellDataNum) && !this.checkingFlags || cell.classList.contains('flag') && !this.checkingFlags) {
				return false;
			}

			if (cell.classList.contains('flag') && this.checkingFlags) {
				cell.classList.remove('flag');
				cell.classList.add('x');
				return;
			}

			cell.classList.remove('questionMark');

			if (!this.gameHasEnded && this.mines.includes(cellDataNum)) {
				cell.classList.add('red');
				cell.classList.add('mine');
				this.youLose();
			} else if (this.mines.includes(cellDataNum)) {
				cell.classList.add('mine');
			} else {
				this.nonFatalGuess(cell, cellDataNum)
			}
		},

		nonFatalGuess(cell, cellDataNum) {
			this.guessedCells.push(cellDataNum);
			if (cell.innerHTML == 1) {
				cell.classList.add('one');
			} else if (cell.innerHTML == 2) {
				cell.classList.add('two');
			} else if (cell.innerHTML == 3) {
				cell.classList.add('three');
			} else if (cell.innerHTML == 4) {
				cell.classList.add('four');
			} else if (cell.innerHTML == 5) {
				cell.classList.add('five');
			} else if (cell.innerHTML == 6) {
				cell.classList.add('six');
			} else if (cell.innerHTML == 7) {
				cell.classList.add('seven');
			} else if (cell.innerHTML == 8) {
				cell.classList.add('eight');
			} else if (cell.innerHTML == 0) {
				cell.classList.add('clicked');
				return this.zeroCell(cell, cellDataNum);
			}
		},

		zeroCell(cell, cellDataNum) {
			let guessArray = cellDataNum.split('-');
			let row = parseInt(guessArray[0]);
			let column = parseInt(guessArray[1]);

			var newGuesses = this.validSurroundingCells(row, column).filter(cell => !this.guessedCells.includes(cell));

			newGuesses.map(cell => {
				this.$refs[cell][0].click();
			});
		},

		validSurroundingCells(row, column) {
			var surroundingCells = [
				`${row - 1}-${column}`,
				`${row + 1}-${column}`,
				`${row}-${column - 1}`,
				`${row}-${column + 1}`,
				`${row - 1}-${column - 1}`,
				`${row - 1}-${column + 1}`,
				`${row + 1}-${column - 1}`,
				`${row + 1}-${column + 1}`
			];

			var validGuesses = surroundingCells.filter(cell => {
				var guessArray = cell.split('-');
				var row = parseInt(guessArray[0]);
				var column = parseInt(guessArray[1]);

				if (row < 1 || row > this.rows || column < 1 || column > this.columns) {
					return false
				}
				return true;
			});

			return validGuesses;
		},

		mark(e) {
			e.preventDefault();

			var cell = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			if (this.guessedCells.includes(cellDataNum)) {
				return false;
			} else if (cell.classList.contains('questionMark')) {
				cell.classList.remove('questionMark');
			} else if (cell.classList.contains('flag')) {
				cell.classList.remove('flag');
				this.numFlags--;
				cell.classList.add('questionMark');
				var index = this.flaggedCells.indexOf(cellDataNum);
				this.flaggedCells.splice(index, 1);
			} else {
				cell.classList.add('flag');
				this.numFlags++;
				this.flaggedCells.push(cellDataNum);
			}
		},

		youLose() {
			this.gameHasEnded = true;
			this.stopTimer();
			for (var mine in this.mines) {
				var td = this.mines[mine]
				this.$refs[td][0].click();
			}

			this.checkingFlags = true;
			for (var flag in this.flaggedCells) {
				if (!this.mines.includes(this.flaggedCells[flag])) {
					var td = this.flaggedCells[flag];
					this.$refs[td][0].click();
				}
			}
		},

		startTimer() {
			this.timer = setInterval(() => this.seconds++, 1000);
		},

		stopTimer() {
			clearInterval(this.timer);
		}

	}
}
</script>

<style lang="scss" scoped>
#gameBoard {
    background-color: #e3e3e3;
    border: 1px solid #a8a8a8;
    display: inline-block;
    font-family: "Times New Roman", Georgia, Serif;
    padding: 10px;

    button {
        border: none;
        margin-bottom: 10px;
        height: 26px;
        outline: none;
        width: 26px;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        margin: auto;
    }

    td {
        border: 1px solid black;
        color: transparent;
        font-size: 1px;
        height: 19px;
        width: 19px;
    }

}

#flagCounter,
#timer {
    display: inline-block;
    font-size: 26px;
    height: 31px;
    width: 39px;
}
</style>
