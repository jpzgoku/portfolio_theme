<template lang="html">
	<b-modal id="settings" title="Settings" header-text-variant="light" header-bg-variant="primary" ok-only>

		<b-row class="text-center">
			<b-col>

				<h4 class="m-4">Heros</h4>

				<div>
					<b-btn v-b-modal.heroSelectModal variant="primary">
						Character Select
					</b-btn>
				</div>

				<b-btn-group class="m-2">
					<b-button
						variant="outline-primary"
						:pressed="heroHumanPlayer"
						@click="selectPlayerType('hero', true)">
							Player
					</b-button>

					<b-button
						variant="outline-primary"
						:pressed="!heroHumanPlayer"
						@click="selectPlayerType('hero', false)">
							CPU
					</b-button>
				</b-btn-group>

			</b-col>

			<b-col>

				<h4 class="m-4">Villians</h4>

				<div>
					<b-btn v-b-modal.villianSelectModal variant="danger">
						Character Select
					</b-btn>
				</div>

				<b-btn-group class="m-2">
					<b-button
						variant="outline-danger"
						:pressed="villianHumanPlayer"
						@click="selectPlayerType('villian', true)">
							Player
					</b-button>

					<b-button
						variant="outline-danger"
						:pressed="!villianHumanPlayer"
						@click="selectPlayerType('villian', false)">
							CPU
					</b-button>
				</b-btn-group>

			</b-col>
		</b-row>

	</b-modal>
</template>

<script>

export default {
	name: 'settings-modal',

	props: {

		heroHumanPlayer: {
			type: Boolean
		},

		villianHumanPlayer: {
			type: Boolean
		}

	},

	methods: {

		selectPlayerType(player, bool) {
			this.$emit('selectPlayerType', player, bool);
		}

	}

}

</script>
