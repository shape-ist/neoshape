<script>
	import { onMount } from 'svelte';
	import { getAverageRGB, rgbToHsl, generateCSSAccent } from './color';
	onMount(() => {
		let el = document.getElementById('entity-icon');
		let rgb = getAverageRGB(el);
		let hsl = rgbToHsl(...rgb);

		// entity icon
		let cssAccent = generateCSSAccent(hsl, '.5');
		let cssBgProp = `linear-gradient(${cssAccent}, transparent)`;
		document.getElementById('bg-grad').style.background = cssBgProp;
	});
	export let iconSrc =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2jY-7w9Kdf6hx20VcMwe992fQ6BSI2Bn6t35JjpEikwNAFkWJV8bR9OMGuZj63MC3zs&usqp=CAU';
</script>

<svelte:head>
	<meta name="theme-color" content="#000000" />
</svelte:head>
<div
	class="
z-10 h-0 w-0
"
>
	<div
		id="bg-grad"
		class="
	absolute top-0 left-0 w-screen h-4/5 transition duration-1000
	"
	/>
</div>
<div
	class="
	w-full justify-center flex-col
	"
>
	<div class="mx-10">
		<img
			id="entity-icon"
			src={iconSrc}
			alt="Project Name comes here"
			crossOrigin="anonymous"
			style="
			box-shadow: 0 12px 20px -10px rgba(0,0,0,.25);
			"
			class="
			w-full h-full rounded-3xl
			"
		/>
	</div>
	<h1
		class="text-center mt-6 font-title font-bold text-2xl px-10 leading-110 text-black
		dark:text-white"
	>
		<span
			class="text-gray-500 text-center px-8 text-xs uppercase leading-loose
			dark:text-gray-400"
		>
			project
		</span>
		<br />
		<span> The Istanbul Chronicle </span>
	</h1>
	<p
		class="
leading-110 mt-4 text-gray-500 text-center px-8 text-sm
dark:text-gray-400
"
	>
		As The Istanbul Chronicle, we deem that true information should be
		accessible by everyone, so we provide our readers news that is
		objective, clear and independent from bias. We search for verified
		sources of information because we believe that from truth, comes
		liberation.
	</p>
</div>
