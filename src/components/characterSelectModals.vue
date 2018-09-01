<template lang="html">

	<div>

		<b-modal id="heroSelectModal" ref="heroSelectModal" size="lg" title="Select Your Hero" header-bg-variant="primary" header-text-variant="light" ok-only>
			<b-container>
				<b-row>
					<b-col md="12" lg="4" class="goku" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="vegeta" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="piccolo" @click="selectHero($event)"></b-col>

				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="trunks" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="gohan" @click="selectHero($event)"></b-col>
					<b-col md="12" lg="4" class="tien" @click="selectHero($event)"></b-col>

				</b-row>
			</b-container>
		</b-modal>

		<b-modal id="villianSelectModal" ref="villianSelectModal" size="lg" title="Select Your Villian" header-bg-variant="danger" header-text-variant="light" ok-only>
			<b-container>
				<b-row>
					<b-col md="12" lg="4" class="android17" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="android18" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="android19" @click="selectVillian($event)"></b-col>

				</b-row>

				<b-row>
					<b-col md="12" lg="4" class="babidi" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="kidBuu" @click="selectVillian($event)"></b-col>
					<b-col md="12" lg="4" class="superBuu" @click="selectVillian($event)"></b-col>

				</b-row>
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
