<script>
	import HeaderBtn from './src/HeaderBtn.svelte';
	import ThemeBtn from './src/ThemeBtn.svelte';
	import Logo from '@lib/Logo.svelte';
</script>

<div
	id="mobile-header-spacer"
	class="
flex h-12
md:hidden
"
/>

<header
	class="
	hidden z-50 w-full h-20 justify-center items-center sticky top-0 mb-20 bg-gradient-to-b from-bg-grad-light
	dark:from-bg-grad-dark
	md:flex
	"
>
	<div
		class="
		flex transition-all duration-500
		px-12 justify-center items-center absoulte sticky top-0 h-full object-fit bg-gray-50 shadow-shape-light border-gray-200 border
		w-auto rounded-3xl mt-8 mx-20
		dark:bg-purple-dark-secondary dark:border-transparent dark:shadow-shape-dark
		"
	>
		<a
			href="/"
			class="
		mr-8 text-black
		dark:text-white
		"
		>
			<Logo fill="currentColor" />
		</a>
		<div class="h-1/3 border border-gray-400s mr-3" />
		<HeaderBtn to="/" title="Home" />
		<HeaderBtn to="/about" title="About" />
		<HeaderBtn to="/projects" title="Projects" />
		<HeaderBtn to="/edu" title="Education" />
		<HeaderBtn to="/p/tester" title="Test Entity" />
		<ThemeBtn />
	</div>
</header>
