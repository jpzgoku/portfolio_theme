<template lang="html">

	<div>

		<b-modal id="heroSelectModal" ref="heroSelectModal" size="lg" title="Select Your Hero" header-bg-variant="primary" header-text-variant="light" ok-only ok-title="Close">
			<b-container>

				<b-row>
					<b-col
						v-for="hero in heros"
						md="12" lg="4" :class="hero"
						@click="selectHero($event)">
					</b-col>
				</b-row>

			</b-container>
		</b-modal>

		<b-modal id="villianSelectModal" ref="villianSelectModal" size="lg" title="Select Your Villian" header-bg-variant="danger" header-text-variant="light" ok-only ok-title="Close" ok-variant="danger">
			<b-container>

				<b-row>
					<b-col
						v-for="villian in villians"
						md="12" lg="4" :class="villian"
						@click="selectVillian($event)">
					</b-col>
				</b-row>

			</b-container>
		</b-modal>

	</div>

</template>

<script>
export default {
	name: 'character-select-modals',

	props: {

		heroSelectModal: {
			type: Boolean,
			default: false
		},

		villianSelectModal: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			heros: [
				'goku',
				'beerus',
				'buuSagaVegeta',
				'trunks',
				'piccolo',
				'gotenksSS3'
				// 'gokuBlue',
				// 'superVegeta',
				// 'gotenksSS',
				// 'gotenks',
				// 'trunksSS',
				// 'tien',
				// 'vegeta',
				// 'gohan'
			],
			villians: [
				'android17',
				'saiyanVegeta',
				'android18',
				'frieza',
				'cell',
				'fatBuu'
				// 'black',
				// 'babidi',
				// 'superBuu',
				// 'zamasu',
				// 'imperfectCell',
				// 'friezaFirstForm',
				// 'blackRose',
				// 'frost3rdForm',
				// 'frostFinalForm',
				// 'kidBuu',
				// 'semiPerfectCell',
				// 'goldenFrieza',
				// 'frost',
				// 'evilBuu',
				// 'cellJr',
				// 'android19',
				// 'android20'
			]
		}
	},

	watch: {

		heroSelectModal(bool) {
			(bool) ? this.openHeroModal() : this.closeHeroModal();
		},

		villianSelectModal(bool) {
			(bool) ? this.openVillianModal() : this.closeVillianModal();
		}

	},

	methods: {

		openHeroModal() {
			this.$refs.heroSelectModal.show()
		},

		openVillianModal() {
			this.$refs.villianSelectModal.show()
		},

		closeHeroModal() {
			this.$refs.heroSelectModal.hide()
		},

		closeVillianModal() {
			this.$refs.villianSelectModal.hide()
		},

		selectHero(e) {
			this.$emit('selectHero', e.srcElement.className)
		},

		selectVillian(e) {
			this.$emit('selectVillian', e.srcElement.className)
		}

	}

}
</script>

<style lang="scss" scoped>

	div.col-md-12.col-lg-4 {
		height: 240px;
	}

</style>
