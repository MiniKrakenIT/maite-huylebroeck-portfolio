<script lang="ts">
	import ProjectPost from '$lib/components/ProjectPost.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import type { Picture } from 'vite-imagetools';
	import MansoryGallery from '$lib/components/MansoryGallery.svelte';

	import image1 from '$lib/assets/projects/Pokémon regional championships/image-1.jpg?enhanced';
	import image2 from '$lib/assets/projects/Pokémon regional championships/image-2.jpg?enhanced';
	import image3 from '$lib/assets/projects/Pokémon regional championships/image-3.jpg?enhanced';
	import image4 from '$lib/assets/projects/Pokémon regional championships/image-4.jpg?enhanced';
	import image5 from '$lib/assets/projects/Pokémon regional championships/image-5.jpg?enhanced';
	import image6 from '$lib/assets/projects/Pokémon regional championships/image-6.jpg?enhanced';
	import image7 from '$lib/assets/projects/Pokémon regional championships/image-7.jpg?enhanced';
	import image8 from '$lib/assets/projects/Pokémon regional championships/image-8.jpg?enhanced';
	import image9 from '$lib/assets/projects/Pokémon regional championships/image-9.jpg?enhanced';

	const images: Picture[] = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9
	];

	const tags = ['Illustrator', 'Photoshop', 'Google workspace'];
</script>

<ProjectPost title="Pokémon EUIC">
	<div class="mx-auto max-w-4xl px-4 py-8">
		<section class="mb-12">
			<h2 class="font-heading mb-6 text-3xl font-bold text-primary">Project overview</h2>
			<div class="space-y-4 text-lg text-gray-700">
				<p>
					The challenge? Creating a brand style that felt like Pokémon without actually using any of
					the official branding. The goal was to design something fun, vibrant, and eye-catching
					that matches well with the look and feel of the brand.
				</p>
			</div>
			<h2 class="font-heading mb-6 text-3xl font-bold text-primary">Creative Process</h2>
			<div class="space-y-4 text-lg text-gray-700">
				<p>
					The foundation of the style was inspired by the many different types of Pokémon and using
					those elements and colors to differentiate the events and types of content we’re
					communicating about. To tie everything together, I decided on using a hexagon pattern as
					the base layer for all visuals, a shape found regularly throughout Pokémon games.
				</p>

				<p>
					Each event has its unique color and logo featuring the skyline of the city made up of
					local architectural highlights. As a little, collectable souvenir, I made a 3D coin,
					embedded with the city skyline as well.
				</p>

				<p>
					As for the Prize Wall (where people can come and collect their prizes) I decided to design
					a backdrop based on traditional Japanese shops/buildings to make it more eye-catching.
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
