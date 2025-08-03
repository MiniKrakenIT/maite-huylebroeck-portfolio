<script lang="ts">
	import ProjectPost from '$lib/components/ProjectPost.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import type { Picture } from 'vite-imagetools';
	import MansoryGallery from '$lib/components/MansoryGallery.svelte';

	import image1 from '$lib/assets/projects/Pokémon EUIC/image-1.jpg?enhanced';
	import image2 from '$lib/assets/projects/Pokémon EUIC/image-2.jpg?enhanced';
	import image3 from '$lib/assets/projects/Pokémon EUIC/image-3.jpg?enhanced';
	import image4 from '$lib/assets/projects/Pokémon EUIC/image-4.jpg?enhanced';
	import image5 from '$lib/assets/projects/Pokémon EUIC/image-5.jpg?enhanced';
	import image6 from '$lib/assets/projects/Pokémon EUIC/image-6.jpg?enhanced';
	import image7 from '$lib/assets/projects/Pokémon EUIC/image-7.jpg?enhanced';
	import image8 from '$lib/assets/projects/Pokémon EUIC/image-8.jpg?enhanced';
	import image9 from '$lib/assets/projects/Pokémon EUIC/image-9.jpg?enhanced';
	import image10 from '$lib/assets/projects/Pokémon EUIC/image-10.jpg?enhanced';
	import image11 from '$lib/assets/projects/Pokémon EUIC/image-11.jpg?enhanced';

	const images: Picture[] = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11
	];

	const tags = ['Illustrator', 'Indesign', 'Photoshop', 'Google workspace'];
</script>

<ProjectPost title="Pokémon EUIC">
	<div class="mx-auto max-w-4xl px-4 py-8">
		<section class="mb-12">
			<h2 class="font-heading mb-6 text-3xl font-bold text-primary">Project overview</h2>
			<div class="space-y-4 text-lg text-gray-700">
				<p>
					3 years in a row I’ve been the graphic designer responsible for almost all branding at the
					Pokémon EUIC events with the last event having more than 14.000 visitors. Creating +100
					visuals for each event, strictly following the brand guidelines from our clients, I've
					learned to balance creativity with consistency, work fast without sacrificing quality, and
					adapt visuals across tons of formats.
				</p>

				<p>
					Big events come with big surprises, and not always the fun kind… Last-minute requests and
					unexpected problems are unavoidable. But by having a very structured workflow and working
					closely with project managers, branding managers and clients, we always tackle challenges
					quickly and find a solution for every problem.
				</p>

				<p>
					Deliverables can vary a lot, from social media posts, flags, digital signage, banners,
					photobooth backdrops, museum backdrops, carpets, cardboard cutouts, flyers, brochures,
					floor stickers and many more. Safe to say there’s a lot of variation in my job.
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
