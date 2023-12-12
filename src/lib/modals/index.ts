import type { ModalComponent } from '@skeletonlabs/skeleton'

import MessageModal from './MessageModal.svelte'

const modalRegistry: Record<string, ModalComponent> = {
	MessageModal: { ref: MessageModal }
}

export default modalRegistry
