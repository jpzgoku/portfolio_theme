<template lang="html">
	<b-navbar toggleable="md" type="dark" variant="primary"
		:class="{'fixed-nav-bar': fixedNavBar}">

		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		<b-navbar-brand :href="this.siteUrl">Zarek Digital Marketing</b-navbar-brand>

		<b-collapse is-nav id="nav_collapse">

			<b-navbar-nav>
				<b-nav-item :href="this.siteUrl + '/wheres-waldo'">
					Where's Waldo
				</b-nav-item>
				<b-nav-item :href="this.siteUrl + '/dragon-ball-battleship'">
					Dragon Ball Battleship
				</b-nav-item>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">

				<b-nav-form>
					<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
					<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
				</b-nav-form>

				<b-nav-item-dropdown text="Lang" right>
					<b-dropdown-item href="#">EN</b-dropdown-item>
					<b-dropdown-item href="#">ES</b-dropdown-item>
					<b-dropdown-item href="#">RU</b-dropdown-item>
					<b-dropdown-item href="#">FA</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-nav-item-dropdown right>
					<!-- Using button-content slot -->
					<template slot="button-content">
						<em>User</em>
					</template>
					<b-dropdown-item href="#">Profile</b-dropdown-item>
					<b-dropdown-item href="#">Signout</b-dropdown-item>
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
