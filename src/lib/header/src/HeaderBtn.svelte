<script>
	import { page } from '$app/stores';
	export let to = '/';
	export let title = 'Button';
</script>

<a
	class:active={$page.path === to}
	sveltekit:prefetch
	class="font-title text-white font-bold pr-3 pl-3 align-middle"
	href={to}
>
	{title}
</a>

<style>
	.active {
		@apply bg-red-500 text-white rounded-lg px-5 py-1 mx-4;
	}
</style>
