<script>
	import Header from '$lib/header/Header.svelte';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
