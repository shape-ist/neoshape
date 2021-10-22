<script>
	import HeaderBtn from './src/HeaderBtn.svelte';
</script>

<header class="w-full h-20 flex justify-center items-center sticky top-0">
	<div
		class="
		hidden transition-all duration-500
		px-12 justify-center items-center absoulte sticky top-0 h-full object-fit bg-gray-50 drop-shadow-sm border-gray-200 border
		w-full mt-0
		lg:w-auto lg:rounded-3xl lg:mt-6
		sm:flex"
	>
		<HeaderBtn to="/" title="Home" />
		<HeaderBtn to="/about" title="About" />
		<HeaderBtn to="/projects" title="Projects" />
		<HeaderBtn to="/edu" title="Education" />
	</div>
</header>
