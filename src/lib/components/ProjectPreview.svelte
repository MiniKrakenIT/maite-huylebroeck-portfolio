<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import type { Snippet } from 'svelte';

	interface Props {
		img: Picture;
		title: string;
		tags: string[];
		position?: 'left' | 'right';
		children: Snippet;
		href: string;
		class?: string;
		[key: string]: unknown;
	}

	const {
		img,
		title,
		children: description,
		tags,
		position = 'left',
		href,
		class: classes
	}: Props = $props();
</script>

<a
	{href}
	class="mx-auto flex items-center rounded-2xl py-4 {position === 'right'
		? 'flex-row-reverse'
		: ''} {classes}"
>
	<div
		class="max-w-50 rounded-full outline-2 outline-offset-10 outline-primary {position === 'right'
			? 'ml-14'
			: 'mr-14'}"
	>
		<enhanced:img loading="lazy" class="rounded-full" src={img} alt="Project preview" />
	</div>
	<div>
		<h3
			class="mb-4 font-title text-3xl font-extrabold text-primary {position === 'right'
				? 'text-right'
				: ''}"
		>
			{title}
		</h3>
		<div class="mb-2 flex flex-wrap {position === 'right' ? 'flex-row-reverse' : ''}">
			{#each tags as tag}
				<span
					class="mx-1 inline-block rounded-full bg-primary px-3 text-sm font-semibold text-background"
				>
					{tag}
				</span>
			{/each}
		</div>
		<p class="text-lg text-primary {position === 'right' ? 'text-right' : ''}">
			{@render description()}
		</p>
	</div>
</a>
