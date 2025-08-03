<script>
	import Hero from '$lib/components/Hero.svelte';
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import profilePic from '$lib/assets/profile.jpg?enhanced';

	import fanfinity from '$lib/assets/projects/fanfinity/image-2.jpg?enhanced';
	import pokemonAUIC from '$lib/assets/projects/Pokémon EUIC/image-1.jpg?enhanced';
	import pokemonRegional from '$lib/assets/projects/Pokémon regional championships/image-1.jpg?enhanced';
</script>

<div>
	<Hero />

	<section class="prose-xl mt-40 text-center text-primary">
		<h1 class="mb-0 font-title font-bold text-primary">Creative Portfolio</h1>
		<p class="mt-0">
			Instead of writing a whole book, I’d like to let my portfolio do the talking.
		</p>
		<div class="relative mx-auto mt-15 flex lg:w-2/3 flex-wrap gap-15 lg:gap-10">
			<ProjectPreview
				href="/projects/Fanfinity"
				img={fanfinity}
				title={'Fanfinity'}
				tags={['branding', 'social media', 'communication']}
			>
				In my current function I’m responsible for the branding and communication of the company
				both digital and print. This includes social media posts, expo stands, flyers, newsletters,
				office branding, business cards, templates, stream assets, etc…
			</ProjectPreview>
			<ProjectPreview
				href="/projects/Pokemon-EUIC"
				img={pokemonAUIC}
				title={'Pokémon EUIC'}
				position="right"
				tags={['branding']}
			>
				Aside from maintaining our own branding, I’m also in charge of the event branding we create
				for clients. The biggest project I work(ed) on is the Pokémon Europe International
				Championships. For the past three years, I’ve been the sole graphic designer responsible for
				almost all on-site branding, from signage to screens and everything in between.
			</ProjectPreview>
			<ProjectPreview
				href="/projects/Pokémon-regional-championships"
				img={pokemonRegional}
				title={'Pokémon regional championships'}
				tags={['branding']}
			>
				For the Pokémon Regional Championships, our client requested to make a complete new brand
				style to use at the events alongside their own branding. I created a separate visual
				identity that I used for on-site branding, goodies, collectable coins, communication, etc…
			</ProjectPreview>
		</div>
	</section>
	<section class="prose-xl mt-20 text-center text-primary">
		<h2 class="mb-0 font-title font-bold text-primary text-5xl">Coming Soon</h2>
		<p class="mt-0">
			More exciting projects and creative work will be showcased here soon. Stay tuned!
		</p>
	</section>
</div>
