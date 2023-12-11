<script lang="ts">
	import type { FadeParams } from 'svelte/transition'

	import { fade } from 'svelte/transition'

	/**
	 * Init & Config
	 */
	const inParams: FadeParams = {
		delay: 50,
		duration: 100
	}
	const outParams: FadeParams = {
		duration: 50
	}
</script>

<div
	class="container p-10 space-y-4"
	in:fade={inParams}
	out:fade={outParams}>
	<slot />
</div>
