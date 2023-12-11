<script lang="ts">
	import type { ModalSettings } from '@skeletonlabs/skeleton'

	import { getToastStore, getModalStore } from '@skeletonlabs/skeleton'
	import PageWrapper from '$lib/navigation/PageWrapper.svelte'

	/**
	 * Init & Config
	 */
	const toastStore = getToastStore()
	const modalStore = getModalStore()
	const modal: ModalSettings = {
		body: 'See the submitted data in the console.',
		component: 'message',
		response: data => console.log(data),
		title: 'Write a new message',
		type: 'component'
	}

	/**
	 * Methods
	 */
	function onOpenToast() {
		toastStore.trigger({
			message: 'This is a toast message',
			timeout: 2000
		})
	}

	function onOpenModal() {
		modalStore.trigger(modal)
	}
</script>

<PageWrapper>
	<h1>Singleton Components</h1>
	<hr />
	<p>Showcase the singleton components: Toast & Modal.</p>
	<div class="flex flex-row gap-2">
		<button
			class="btn variant-filled"
			on:click={onOpenToast}>
			Open Toast
		</button>
		<button
			class="btn variant-filled"
			on:click={onOpenModal}>
			Open Modal
		</button>
	</div>
</PageWrapper>
