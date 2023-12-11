<script lang="ts">
	import type { Route } from '@types'

	import { page } from '$app/stores'
	import { getDrawerStore } from '@skeletonlabs/skeleton'

	/**
	 * Init & Config
	 */
	const drawerStore = getDrawerStore()

	/**
	 * Props
	 */
	export let routes: Route[]

	/**
	 * Methods
	 */
	function onNavigation() {
		drawerStore.close()
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each routes as route}
			<li>
				<a
					class:bg-primary-active-token={route.path === $page.url.pathname}
					href={route.path}
					on:click={onNavigation}>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
