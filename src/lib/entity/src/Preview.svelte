<script>
	export let title;
	export let text;
	export let entityType;
	export let iconSrc =
		'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
	import EduMeta from './EduMeta.svelte';
	import { onMount } from 'svelte';
	import colorMount from './colorOnMount';
	onMount(() => {
		colorMount(document);
	});
</script>

<svelte:head>
	<meta id="theme-meta" name="theme-color" />
</svelte:head>

<div
	class="
z-10 h-0 w-0 md:hidden
"
>
	<div
		id="bg-grad"
		class="
	absolute top-0 left-0 w-screen h-5/6
	"
	/>
</div>
<div
	class="
	w-full justify-center flex-col mb-20
	md:mr-16 md:max-w-xs sticky
	"
>
	<div
		class="mx-10
	md:mx-0
	"
	>
		<img
			id="entity-icon"
			src={iconSrc}
			alt={title}
			crossOrigin="anonymous"
			style="
			box-shadow: 0 20px 20px -12px rgba(0,0,0,.12);
			border-radius: 20%;
			"
			class="
			w-full h-full bg-gray-700
			"
		/>
	</div>
	<h1
		class="text-center mt-6 font-title font-bold text-2xl px-10 leading-110 text-black
		dark:text-white
		md:text-left md:px-0 md:pr-4 md:text-4xl md:mt-0
		"
	>
		<span
			class="text-gray-500 px-8 text-xs uppercase leading-loose
			dark:text-gray-400
			md:hidden
			"
		>
			{entityType}
		</span>
		<br />
		<span> {title} </span>
	</h1>
	<p
		class="
leading-110 mt-4 text-gray-500 text-center px-8 text-sm mb-6
dark:text-gray-400
md:text-left md:px-0 md:pr-4 md:text-md md:leading-snug
"
	>
		{text}
	</p>
	<EduMeta />
</div>

<style>
	@keyframes top-in {
		from {
			opacity: 0;
			transform: translateY(-600px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	#bg-grad {
		transition: 0.5s ease;
		animation: 0.8s top-in;
	}
</style>
