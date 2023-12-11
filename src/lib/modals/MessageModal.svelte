<script lang="ts">
	import type { SvelteComponent } from 'svelte'

	import { getModalStore } from '@skeletonlabs/skeleton'

	/**
	 * Init & Config
	 */
	const modalStore = getModalStore()

	/**
	 * Props
	 */
	export let parent: SvelteComponent

	/**
	 * State
	 */
	$: modal = $modalStore[0] ?? null

	const formData = {
		email: '',
		message: ''
	}

	/**
	 * Methods
	 */
	function onSubmitForm() {
		if (modal?.response) {
			modal.response(formData)
		}

		modalStore.close()
	}
</script>

{#if modal}
	<div class="card p-4 w-modal shadow-xl space-y-4">
		{#if modal.title}
			<header class="text-2xl font-bold">
				{modal.title}
			</header>
		{/if}
		{#if modal.body}
			<article>
				{modal.body}
			</article>
		{/if}
		<form
			id="message-form"
			class=" border border-surface-500 p-4 space-y-4 rounded-container-token"
			on:submit={onSubmitForm}>
			<label class="label">
				<span>Email*</span>
				<input
					class="input"
					placeholder="Enter email address..."
					required
					type="email"
					bind:value={formData.email} />
			</label>
			<label class="label">
				<span>Message*</span>
				<textarea
					class="textarea"
					cols="30"
					id="message"
					name="message"
					placeholder="Enter message..."
					required
					rows="5"
					bind:value={formData.message} />
			</label>
		</form>
		<footer class={parent.regionFooter}>
			<button
				class="btn {parent.buttonNeutral}"
				on:click={parent.onClose}>
				{parent.buttonTextCancel}
			</button>
			<button
				class="btn {parent.buttonPositive}"
				form="message-form"
				type="submit">
				Send message
			</button>
		</footer>
	</div>
{/if}
