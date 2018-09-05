<template lang="html">

	<div>

		<b-modal id="heroSelectModal" ref="heroSelectModal" size="lg" title="Select Your Hero" header-bg-variant="primary" header-text-variant="light" ok-only ok-title="Close">
			<b-container>

				<b-row>
					<b-col
						v-for="hero in heros"
						md="12" lg="4"
						:class="hero.name"
						:key="hero.name"
						:data="hero.color"
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
						md="12" lg="4"
						:class="villian.name"
						:key="villian.name"
						:data="villian.color"
						@click="selectVillian($event)">
					</b-col>
				</b-row>

			</b-container>
		</b-modal>

	</div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
	name: 'character-select-modals',

	computed: {
		...mapGetters([
			'heros',
			'villians',
		])
	},

	methods: {

		closeHeroModal() {
			this.$refs.heroSelectModal.hide();
		},

		closeVillianModal() {
			this.$refs.villianSelectModal.hide();
		},

		selectHero(e) {
			this.$emit('selectHero', e.srcElement.className, e.srcElement.attributes.data.nodeValue);
		},

		selectVillian(e) {
			this.$emit('selectVillian', e.srcElement.className, e.srcElement.attributes.data.nodeValue);
		}

	}

}
</script>

<style lang="scss" scoped>

	div.col-md-12.col-lg-4 {
		height: 240px;
	}

</style>
