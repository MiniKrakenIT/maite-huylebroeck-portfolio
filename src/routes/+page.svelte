<script>
	import Hero from '$lib/components/Hero.svelte';
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import profilePic from '$lib/assets/profile-pic.jpg?enhanced';
</script>

<div>
	<Hero />

	<div class="relative mx-auto mt-40 flex w-2/3 flex-wrap gap-17">
		<ProjectPreview
			href="/projects/someproject"
			img={profilePic}
			title={'Hello World'}
			tags={['svelte', 'sveltekit', 'tailwindcss']}
		>
			Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
			nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
			minim veniam, quis nostrud exerci tation ullamcorper
		</ProjectPreview>
		<ProjectPreview
			href="/projects/someproject"
			img={profilePic}
			title={'Hello World'}
			position="right"
			tags={['svelte', 'sveltekit', 'tailwindcss']}
		>
			Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
			nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
			minim veniam, quis nostrud exerci tation ullamcorper
		</ProjectPreview>
		<ProjectPreview
			href="/projects/someproject"
			img={profilePic}
			title={'Hello World'}
			tags={['svelte', 'sveltekit', 'tailwindcss']}
		>
			Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
			nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
			minim veniam, quis nostrud exerci tation ullamcorper
		</ProjectPreview>
		<ProjectPreview
			href="/projects/someproject"
			img={profilePic}
			title={'Hello World'}
			position="right"
			tags={['svelte', 'sveltekit', 'tailwindcss']}
		>
			Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
			nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
			minim veniam, quis nostrud exerci tation ullamcorper
		</ProjectPreview>
	</div>
</div>
