<script>
	import { onMount } from 'svelte';
	import { getAverageRGB, rgbToHsl, generateCSSAccent } from './color';
	onMount(() => {
		let el = document.getElementById('entity-icon');
		let rgb = getAverageRGB(el);
		let cssAcc = generateCSSAccent(rgbToHsl(...rgb), '1');
		console.log(cssAcc, el);
		el.style.boxShadow = `0 16px 100px -20px hsla(265, 50%, 52%, 1)`;
	});
</script>

<div
	class="
w-full justify-center flex-col
"
>
	<div class="mx-10">
		<img
			id="entity-icon"
			src="https://miro.medium.com/max/600/1*fB8aoJuz1a27y1x3z0w1Kw.png"
			alt="Project Name comes here"
			crossOrigin="anonymous"
			class="
        w-full h-full
        rounded-3xl
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
