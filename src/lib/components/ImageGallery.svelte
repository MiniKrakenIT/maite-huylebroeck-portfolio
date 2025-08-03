<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import type { Picture } from 'vite-imagetools';

	interface Props {
		galleryID: string;
		images: {
			thumbnail: Picture;
			largeURL: string;
			width: number;
			height: number;
		}[];
	}

	let { galleryID, images } = $props();

	let lightbox: PhotoSwipeLightbox;

	onMount(() => {
		lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});

	onDestroy(() => {
		if (!lightbox) return;
		lightbox.destroy();
	});
</script>

<div class="pswp-gallery" id={galleryID}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
			aria-label="project preview"
		>
			<enhanced:img src={image.thumbnail} alt="project previews" />
		</a>
	{/each}
</div>
