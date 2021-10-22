<script>
	import HeaderBtn from './src/HeaderBtn.svelte';
	import Logo from '@static/logo.svg?component';
</script>

<header
	class="z-50 w-full h-20 flex justify-center items-center sticky top-0 mb-6"
>
	<div
		class="
		hidden transition-all duration-500
		px-12 justify-center items-center absoulte sticky top-0 h-full object-fit bg-gray-50 drop-shadow-sm border-gray-200 border
		w-full mt-0
		lg:w-auto lg:rounded-3xl lg:mt-6
		sm:flex"
	>
		<a href="/">
			<Logo class="mr-3" on:click={console.log('uwu')} />
		</a>
		<div class="h-1/3 border border-gray-400s mr-3" />
		<HeaderBtn to="/" title="Home" />
		<HeaderBtn to="/about" title="About" />
		<HeaderBtn to="/projects" title="Projects" />
		<HeaderBtn to="/edu" title="Education" />
	</div>
</header>
