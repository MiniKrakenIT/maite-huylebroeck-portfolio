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

	const reversed = $derived(position === 'right');
</script>

<div
	class="flex flex-col items-center justify-center gap-7 rounded-2xl lg:flex-row {reversed &&
		'lg:flex-row-reverse'} {classes}"
>
	<div
		class="mx-auto max-w-30 rounded-full outline-2 outline-offset-10 outline-primary lg:max-w-50"
	>
		<enhanced:img loading="lazy" class="rounded-full" src={img} alt="Project preview" />
	</div>
	<div>
		<h3
			class="mt-0 mb-4 font-title text-3xl font-extrabold text-primary {reversed
				? 'lg:text-right'
				: 'lg:text-left'}"
		>
			{title}
		</h3>
		<div
			class="mb-2 flex flex-wrap justify-center lg:justify-normal {reversed
				? 'lg:flex-row-reverse'
				: ''}"
		>
			{#each tags as tag}
				<span
					class="mx-1 inline-block rounded-full bg-primary px-3 text-sm font-semibold text-background"
				>
					{tag}
				</span>
			{/each}
		</div>
		<p class="text-lg text-primary {reversed ? 'lg:text-right' : 'lg:text-left'}">
			{@render description()}
		</p>
	</div>
	<a
		{href}
		role="button"
		class="{reversed &&
			'lg:order-first'} -mt-7 rounded-xl px-4 py-1.5 font-title text-2xl text-primary outline-2 outline-primary transition-all hover:bg-primary hover:text-background hover:shadow-xl lg:mt-0 lg:h-1/2 lg:px-0"
	>
		<div class="lg:hidden">Discover more…</div>
		<div class="hidden h-full w-full items-center justify-center lg:flex">
			<svg
				stroke-width="2"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="currentColor"
				class="h-15 w-15"
				><path
					d="m9 6 6 6-6 6"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		</div>
	</a>
</div>
