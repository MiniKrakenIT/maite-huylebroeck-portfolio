<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto mt-20 text-primary">
	<div class="relative mb-10">
		<a class="absolute top-1/6 left-0 h-10 w-10" aria-label="Back Button" href="/">
			<svg
				viewBox="0 0 24 24"
				stroke-width="4"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="currentColor"
			>
				<path
					d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
		<h1 class="m-0 text-center font-title text-6xl font-bold">Project</h1>
	</div>

	<div class="mx-auto prose">
		{@render children()}
	</div>
</div>
