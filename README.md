# SkeletonKit

A small SvelteKit starter with SkeletonUI & TailwindCSS included.
Navigation is already included via responsive Sidebar and its easy to add new Modals/Dialogs or use the Toast for system messages.

## Clone the project

```bash
git clone https://github.com/Blackwidow-sudo/skeletonkit.git
```

## Install dependencies

```bash
pnpm install
```

## Developing

- Add new routes in `src/lib/routes.ts`
- Add new modals/dialogs in `src/lib/modals/` (dont forget to register them in `+layout.svelte`)
- Add new types in `src/types/`
- Use the `PageWrapper` component to wrap new pages, so that they fade in and out on navigation
