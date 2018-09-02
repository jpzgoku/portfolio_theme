<template lang="html">

	<div>

		<b-modal id="heroSelectModal" ref="heroSelectModal" size="lg" title="Select Your Hero" header-bg-variant="primary" header-text-variant="light" ok-only>
			<b-container>

				<b-row>
					<b-col md="12" lg="4" class="goku" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="beerus" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="buuSagaVegeta" @click="selectHero($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="trunks" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="piccolo" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="gotenksSS3" @click="selectHero($event)"></b-col>
				</b-row>

				<!-- <b-row>
					<b-col md="12" lg="4" class="gokuBlue" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="superVegeta" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="" @click="selectHero($event)"></b-col>
				</b-row> -->

				<!--<b-row>
					<b-col md="12" lg="4" class="gotenksSS" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="gotenks" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="trunksSS" @click="selectHero($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="tien" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="vegeta" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="gohan" @click="selectHero($event)"></b-col>
				</b-row> -->

			</b-container>
		</b-modal>

		<b-modal id="villianSelectModal" ref="villianSelectModal" size="lg" title="Select Your Villian" header-bg-variant="danger" header-text-variant="light" ok-only>
			<b-container>

				<b-row>
					<b-col md="12" lg="4" class="android17" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="saiyanVegeta" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="android18" @click="selectVillian($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="frieza" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="cell" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="fatBuu" @click="selectVillian($event)"></b-col>
				</b-row>

				<!-- <b-row>
					<b-col md="12" lg="4" class="black" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="babidi" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="superBuu" @click="selectVillian($event)"></b-col>
				</b-row> -->

				<!-- <b-row>
					<b-col md="12" lg="4" class="zamasu" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="imperfectCell" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="friezaFirstForm" @click="selectVillian($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="blackRose" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="frost3rdForm" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="frostFinalForm" @click="selectVillian($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="kidBuu" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="semiPerfectCell" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="goldenFrieza" @click="selectVillian($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="frost" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="evilBuu" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="" @click="selectVillian($event)"></b-col>
				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="cellJr" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="android19" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="android20" @click="selectVillian($event)"></b-col>
				</b-row> -->

			</b-container>
		</b-modal>

	</div>

</template>

<script>
export default {
	name: 'character-select-modals',

	// props: {
	//
	// 	heroSelectModal: {
	// 		type: Boolean,
	// 		default: false
	// 	},
	//
	// 	villianSelectModal: {
	// 		type: Boolean,
	// 		default: false
	// 	}
	// },

	data() {
		return {

		}
	},

	// watch: {
	//
	// 	heroSelectModal(bool) {
	// 		(bool) ? this.openHeroModal() : this.closeHeroModal();
	// 	},
	//
	// 	villianSelectModal(bool) {
	// 		(bool) ? this.openVillianModal() : this.closeVillianModal();
	// 	}
	//
	// },

	methods: {

		// openHeroModal() {
		// 	this.$refs.heroSelectModal.show()
		// },
		//
		// openVillianModal() {
		// 	this.$refs.villianSelectModal.show()
		// },
		//
		// closeHeroModal() {
		// 	this.$refs.heroSelectModal.hide()
		// },
		//
		// closeVillianModal() {
		// 	this.$refs.villianSelectModal.hide()
		// },

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
