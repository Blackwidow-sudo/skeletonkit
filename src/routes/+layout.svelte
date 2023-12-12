<script lang="ts">
	import type { DrawerSettings } from '@skeletonlabs/skeleton'

	import {
		AppBar,
		AppShell,
		Drawer,
		getDrawerStore,
		initializeStores,
		LightSwitch,
		Modal,
		Toast
	} from '@skeletonlabs/skeleton'
	import '../app.postcss'
	import routes from '$lib/routes'
	import Navbar from '$lib/navigation/Navbar.svelte'
	import modalRegistry from '@modals'

	/**
	 * Init & Config
	 */
	initializeStores()

	const drawerStore = getDrawerStore()
	const drawerSettings: DrawerSettings = {
		width: 'w-80'
	}

	/**
	 * Methods
	 */
	function onOpenDrawer() {
		drawerStore.open(drawerSettings)
	}
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navbar {routes} />
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<AppBar slot="header">
		<div
			slot="lead"
			class="flex items-center">
			<button
				class="mr-4 lg:hidden btn btn-sm"
				on:click={onOpenDrawer}>
				<span>
					<svg
						viewBox="0 0 100 80"
						class="w-4 h-4 fill-token">
						<rect
							width="100"
							height="20" />
						<rect
							y="30"
							width="100"
							height="20" />
						<rect
							y="60"
							width="100"
							height="20" />
					</svg>
				</span>
			</button>
			<strong class="text-xl uppercase">SkeletonKit</strong>
		</div>
		<LightSwitch slot="trail" />
	</AppBar>
	<svelte:fragment slot="sidebarLeft">
		<Navbar {routes} />
	</svelte:fragment>
	<slot />
</AppShell>
<Modal components={modalRegistry} />
<Toast />
