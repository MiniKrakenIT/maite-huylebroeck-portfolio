<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	interface Props {
		images: Picture[];
	}

	let { images }: Props = $props();
</script>

<div class="masonry">
	{#each images as image}
		<div class="item">
			<a href="{image.img.src}">
				<enhanced:img
					class="rounded-xl"
					loading="lazy"
					src={image}
					alt="Preview of project"
				/>
			</a>
		</div>
	{/each}
</div>

<style>
	.masonry {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
		grid-template-rows: masonry;
	}

</style>
