<script>
	import HeaderBtn from './src/HeaderBtn.svelte';
</script>

<header class="w-full h-20 flex justify-center items-center">
	<div
		class="rounded-full	px-20 flex items-center absoulte sticky top-0 h-full object-fit bg-gray-800 drop-shadow-md"
	>
		<HeaderBtn to="/" title="Home" />
		<HeaderBtn to="/about" title="About" />
	</div>
</header>
