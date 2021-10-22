<script>
	import Header from '@lib/header/Header.svelte';
</script>

<main>
	<Header />
	<div id="app">
		<slot />
	</div>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	#app {
		max-width: 1000px;
		margin: auto;
		padding: 0 40px;
		padding-bottom: 200px;
	}
</style>
