<template lang="html">
	<b-navbar toggleable="md" type="dark" variant="dark"
		:class="{'fixed-nav-bar': fixedNavBar}">

		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		<b-navbar-brand :href="this.siteUrl">John Zarek</b-navbar-brand>

		<b-collapse is-nav id="nav_collapse">

			<b-navbar-nav>
				<b-nav-item :href="this.siteUrl + '/dragon-ball-battleship'">
					Dragon Ball Battleship
				</b-nav-item>
				<b-nav-item :href="this.siteUrl + '/wheres-waldo'">
					Where's Waldo
				</b-nav-item>
				<b-nav-item :href="this.siteUrl + '/minesweeper'">
					Minesweeper
				</b-nav-item>
				<b-nav-item :href="this.siteUrl + '/resume'">
					Resume
				</b-nav-item>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">

				<b-nav-item-dropdown text="Lang" right>
					<b-dropdown-item href="#">EN</b-dropdown-item>
					<b-dropdown-item href="#">ES</b-dropdown-item>
					<b-dropdown-item href="#">RU</b-dropdown-item>
					<b-dropdown-item href="#">FA</b-dropdown-item>
				</b-nav-item-dropdown>

			</b-navbar-nav>

		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'custom-nav-bar',

	props: {

		fixedNavBar: {
			type: Boolean,
			default: false
		},

		siteUrl: {
			type: String
		}
	}
	
}
</script>

<style lang="scss" scoped>
	.fixed-nav-bar {
		position: fixed;
		width: 100%
	}
</style>
