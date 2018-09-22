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
				<button :class="clearGameButtonImg" @click="clearGame"></button>
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
			disableGuessing: false,
			mines: [],
			safeCells: [],
			flaggedCells: [],
			guessedCells: [],
			clearGameButtonImg: 'smiley-face'
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
			this.disableGuessing = false;
			this.mines = [];
			this.safeCells = [];
			this.flaggedCells = [];
			this.guessedCells = [];
			this.clearGameButtonImg = 'smiley-face';
			this.stopTimer();
			var allClasses = ['mine', 'flag', 'question-mark', 'x', 'red', 'clicked', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
			Util.clearBoard(...allClasses);
		},

		placeMines(firstGuess) {
			if (this.mines.length === this.numMines) return false;

			var row = Math.floor(Math.random() * (this.rows)) + 1;
			var column = Math.floor(Math.random() * (this.columns)) + 1;
			var newMine = `${row}-${column}`;

			if (!this.mines.includes(newMine) && newMine !== firstGuess) {
				this.mines.push(newMine);
			}
			this.placeMines(firstGuess);
		},

		getCellData() {
			for (var row = 1; row <= this.rows; row++) {
				for (var column = 1; column <= this.columns; column++) {
					this.setSurroundingCellData(row, column);
					var td = `${row}-${column}`;
					if (!this.mines.includes(td)) {
						this.safeCells.push(td);
					}
				}
			}
		},

		setSurroundingCellData(row, column) {
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
			var cell = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			if (this.isFirstGuess) {
				this.placeMines(cellDataNum);
				this.getCellData();
				this.isFirstGuess = false;
			}

			if (this.disableGuessing) return false;

			if (!this.gameInProgress) {
				this.gameInProgress = true;
				this.startTimer();
			}

			if (this.guessedCells.includes(cellDataNum) || cell.classList.contains('flag')) {
				return false;
			}

			cell.classList.remove('question-mark');

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

			switch (parseInt(cell.innerHTML)) {
				case 1:
					cell.classList.add('one');
					break;
				case 2:
					cell.classList.add('two');
					break;
				case 3:
					cell.classList.add('three');
					break;
				case 4:
					cell.classList.add('four');
					break;
				case 5:
					cell.classList.add('five');
					break;
				case 6:
					cell.classList.add('six');
					break;
				case 7:
					cell.classList.add('seven');
					break;
				case 8:
					cell.classList.add('eight');
					break;
				case 0:
					cell.classList.add('clicked');
					this.clickAdjacentCells(cell, cellDataNum);
					break;
			}

			this.checkForWin();
		},

		clickAdjacentCells(cell, cellDataNum) {
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

			if (this.disableGuessing) {
				return false;
			}

			var cell = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			if (this.guessedCells.includes(cellDataNum)) {
				return false;
			} else if (cell.classList.contains('question-mark')) {
				cell.classList.remove('question-mark');
			} else if (cell.classList.contains('flag')) {
				cell.classList.remove('flag');
				this.numFlags--;
				cell.classList.add('question-mark');
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
			this.clearGameButtonImg = 'dead-face';
			this.stopTimer();
			this.mines.map(mine => this.$refs[mine][0].click());
			this.flaggedCells.map(flag => {
				if (!this.mines.includes(flag)) {
					this.$refs[flag][0].classList.remove('flag');
					this.$refs[flag][0].classList.add('x');
				}
			});
			this.disableGuessing = true;
		},

		checkForWin() {
			// If every square that dosen't have a bomb has been clicked, then add a flag to each square that has yet to be flagged and end the game.
			var safeCellsLeft = this.safeCells.filter(cell => !this.guessedCells.includes(cell));
			if (!safeCellsLeft.length) {
				this.youWin();
			}
		},

		youWin() {
			this.mines.map(mine => {
				if (!this.flaggedCells.includes(mine)) {
					this.$refs[mine][0].classList.remove('question-mark');
					this.$refs[mine][0].classList.add('flag');
					this.numFlags--;
				}
			});

			this.gameHasEnded = true;
			this.clearGameButtonImg = 'win-face';
			this.stopTimer();
			this.disableGuessing = true;
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

.mine {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/mine.png");
	background-size: cover;
}

.flag {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/flag.png") 50% 50%;
	background-size: 80%;
}

.question-Mark {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/questionMark.png") 50% 50%;
	background-size: 70%;
}

.x {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/x.svg") 50% 50%;
	background-size: 70%;
}

.red {
	background-color: red;
}

.clicked {
	background-color: #a8a8a8;
}

.one {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/1.png");
	background-size: cover;
}

.two {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/2.png");
	background-size: cover;
}

.three {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/3.png");
	background-size: cover;
}

.four {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/4.png");
	background-size: cover;
}

.five {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/5.png");
	background-size: cover;
}

.six {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/6.png");
	background-size: cover;
}

.seven {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/7.png");
	background-size: cover;
}

.eight {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/8.png");
	background-size: cover;
}

.smiley-face {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/smileyFace.png");
	background-size: cover;
}

.dead-face {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/deadFace.gif");
	background-size: cover;
}

.win-face {
	background: no-repeat url("/wp-content/themes/portfolio/src/assets/minesweeper/winFace.jpg");
	background-size: cover;
}

</style>
