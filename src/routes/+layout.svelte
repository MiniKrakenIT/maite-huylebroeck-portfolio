<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<span class="background-gradient absolute inset-0 -z-1 h-300 w-full"> </span>

<div class="relative container mx-auto font-body">
	{@render children()}
</div>

<style global>
	.background-gradient {
		background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 50%);
	}
</style>
