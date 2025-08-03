<script lang="ts">
	import ProjectPost from '$lib/components/ProjectPost.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import image1 from '$lib/assets/projects/fanfinity/Portfolio pics-04-min.jpg?enhanced';
	import image3 from '$lib/assets/projects/fanfinity/Portfolio pics_visual 1-min.jpg?enhanced';
	import image4 from '$lib/assets/projects/fanfinity/Portfolio pics_visual 2-min.jpg?enhanced';
	import image5 from '$lib/assets/projects/fanfinity/Portfolio pics_visual 4-min.jpg?enhanced';
	import type { Picture } from 'vite-imagetools';
	import MansoryGallery from "$lib/components/MansoryGallery.svelte";

	const images: Picture[] = [image1, image3, image4, image5];

	const tags = [
		'Illustrator',
		'Indesign',
		'Photoshop',
		'Premiere Pro',
		'Canva',
		'Mailchimp',
		'Webdesign',
		'Google workspace',
		'...'
	];
</script>

<ProjectPost title="Fanfinity">
	<div class="mx-auto max-w-4xl px-4 py-8">
		<section class="mb-12">
			<h2 class="font-heading mb-6 text-3xl font-bold text-primary">Project overview</h2>
			<div class="space-y-4 text-lg text-gray-700">
				<p>
					Keeping the brand identity in mind I create visuals on a daily basis. While focusing on
					consistency, I still try to find space for creativity.
				</p>

				<p>
					To speed things up and reduce errors, I design templates for social media, newsletters,
					presentations,.. making sure our branding stays clear and cohesive across all channels.
				</p>

				<p>
					I'm always exploring new ways to represent our brand. One recent example: a fun set of
					on-brand colleague introduction 'playing cards', perfectly in line with the events we
					organize.
				</p>

				<p class="font-semibold text-primary">Discover some of my creations below!</p>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="font-heading mb-6 text-2xl font-bold text-primary">Tools & Techniques</h2>
			<div class="flex flex-wrap gap-3">
				{#each tags as tool}
					<Tag>{tool}</Tag>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="font-heading mb-6 text-2xl font-bold text-primary">Visualisation</h2>
			<MansoryGallery {images} />
		</section>
	</div>
</ProjectPost>
