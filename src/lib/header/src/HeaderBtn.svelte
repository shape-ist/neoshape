<script>
	import { page } from '$app/stores';
	export let to = '/';
	export let title = 'Button';
</script>

<div class="flex flex-row">
	<a
		class:active={$page.path === to}
		sveltekit:prefetch
		class="font-title text-gray-600 font-medium px-5 align-middle text-sm"
		href={to}
	>
		{title}
		{#if $page.path === to}
			<div
				class="bg-purple-500 h-1 w-1/3 rounded-full mt-1 m-auto transform -translate-y-1"
			/>
		{/if}
	</a>
</div>

<style>
	.active {
		@apply font-bold transform translate-y-1 text-gray-800;
	}
</style>
