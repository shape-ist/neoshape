<script>
	import { page } from '$app/stores';
	import HeaderBtn from './src/HeaderBtn.svelte';
</script>

<header
	class="absoulte sticky top-0 w-full flex justify-center items-center h-16 bg-gray-800 drop-shadow-md"
>
	<HeaderBtn to="/" title="Home" />
	<HeaderBtn to="/about" title="About" />
</header>
