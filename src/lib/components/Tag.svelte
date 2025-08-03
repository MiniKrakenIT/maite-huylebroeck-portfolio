<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		[key: string]: unknown;
	}

	let { children }: Props = $props();
</script>

<span class="rounded-full bg-primary/20 px-4 py-2 text-sm">{@render children()}</span>
