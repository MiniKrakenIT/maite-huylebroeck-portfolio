<script>
	import Hero from '$lib/components/Hero.svelte';
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import profilePic from '$lib/assets/profile.jpg?enhanced';

	import fanfinity from '$lib/assets/projects/fanfinity/Portfolio pics_homepage image-min.jpg?enhanced';
	import pokemonAUIC from '$lib/assets/projects/Pokémon EUIC/image-1.jpg?enhanced';
</script>

<div>
	<Hero />

	<section class="prose-xl mt-40 text-center text-primary">
		<h1 class="mb-0 font-title font-bold text-primary">Creative Portfolio</h1>
		<p class="mt-0">
			Instead of writing a whole book, I’d like to let my portfolio do the talking.
		</p>
		<div class="relative mx-auto mt-15 flex w-2/3 flex-wrap gap-15 lg:gap-10">
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
				almost all on-site branding — from signage to screens and everything in between.
			</ProjectPreview>
			<ProjectPreview
				href="/projects/someproject"
				img={profilePic}
				title={'Hello World'}
				tags={['svelte', 'sveltekit', 'tailwindcss']}
			>
				Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
				diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
				enim ad minim veniam, quis nostrud exerci tation ullamcorper
			</ProjectPreview>
		</div>
	</section>
</div>
