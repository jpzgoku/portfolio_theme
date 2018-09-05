export default {
	state: {
		heros: {
			goku: {
				name: 'goku',
				color: '#e50000'
			},
			beerus: {
				name: 'beerus',
				color: '#885ead'
			},
			buuSagaVegeta: {
				name: 'buuSagaVegeta',
				color: 'purple'
			},
			trunks: {
				name: 'trunks',
				color: '#00ffff'
			},
			piccolo: {
				name: 'piccolo',
				color: '#00ce00'
			},
			gotenksSS3: {
				name: 'gotenksSS3',
				color: '#ffff00'
			}
			// gokuBlue: {
			// 	name: 'gokuBlue',
			// 	color: '#00ffff'
			// },
			// superVegeta: {
			// 	name: 'superVegeta',
			// 	color: 'y'
			// },
			// gotenksSS: {
			// 	name: 'gotenksSS',
			// 	color: 'y'
			// },
			// gotenks: {
			// 	name: 'gotenks',
			// 	color: 'y'
			// },
			// trunksSS: {
			// 	name: 'trunksSS',
			// 	color: 'y'
			// },
			// tien: {
			// 	name: 'tien',
			// 	color: 'y'
			// },
			// vegeta: {
			// 	name: 'vegeta',
			// 	color: 'y'
			// },
			// gohan: {
			// 	name: 'gohan',
			// 	color: 'y'
			// },
		},
		villians: {
			android17: {
				name: 'android17',
				color: '#ff1919'
			},
			saiyanVegeta: {
				name: 'saiyanVegeta',
				color: '#7d26cd'
			},
			android18: {
				name: 'android18',
				color: '#4889d8'
			},
			frieza: {
				name: 'frieza',
				color: '#551a8b'
			},
			cell: {
				name: 'cell',
				color: '#00ff00'
			},
			fatBuu: {
				name: 'fatBuu',
				color: '#ff94ce'
			}
			// black: {
			// 	name: 'black',
			// 	color: 'y'
			// },
			// babidi: {
			// 	name: 'babidi',
			// 	color: 'y'
			// },
			// superBuu: {
			// 	name: 'superBuu',
			// 	color: 'y'
			// },
			// zamasu: {
			// 	name: 'zamasu',
			// 	color: 'y'
			// },
			// imperfectCell: {
			// 	name: 'imperfectCell',
			// 	color: 'y'
			// },
			// friezaFirstForm: {
			// 	name: 'friezaFirstForm',
			// 	color: 'y'
			// },
			// blackRose: {
			// 	name: 'blackRose',
			// 	color: 'y'
			// },
			// frost3rdForm: {
			// 	name: 'frost3rdForm',
			// 	color: 'y'
			// },
			// frostFinalForm: {
			// 	name: 'frostFinalForm',
			// 	color: 'y'
			// },
			// kidBuu: {
			// 	name: 'kidBuu',
			// 	color: 'y'
			// },
			// semiPerfectCell: {
			// 	name: 'semiPerfectCell',
			// 	color: 'y'
			// },
			// goldenFrieza: {
			// 	name: 'goldenFrieza',
			// 	color: 'y'
			// },
			// frost: {
			// 	name: 'frost',
			// 	color: 'y'
			// },
			// evilBuu: {
			// 	name: 'evilBuu',
			// 	color: 'y'
			// },
			// cellJr: {
			// 	name: 'cellJr',
			// 	color: 'y'
			// },
			// android19: {
			// 	name: 'android19',
			// 	color: 'y'
			// },
			// android20: {
			// 	name: 'android20',
			// 	color: 'y'
			// }
		}
	},

	getters: {

		heros(state) {
            return state.heros;
        },

		villians(state) {
            return state.villians;
        }

	}

};
