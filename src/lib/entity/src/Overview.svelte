<script>
	import { onMount } from 'svelte';
	import {
		getAverageRGB,
		rgbToHsl,
		generateCSSAccent,
		blend,
		hslToHex,
	} from './color';
	export let iconSrc =
		'https://miro.medium.com/max/600/1*fB8aoJuz1a27y1x3z0w1Kw.png';
	onMount(() => {
		let gOpacity = 0.25;

		let el = document.getElementById('entity-icon');
		let bgEl = document.getElementById('bg-grad');

		el.setAttribute('crossOrigin', 'anonymous');

		let rgb = getAverageRGB(el);
		let hsl = rgbToHsl(...rgb);
		hsl[1] = 100;
		hsl[2] = 40;

		let hslFormatted = [];
		hslFormatted.push(hsl[0]);
		hslFormatted.push(hsl[1]);
		hslFormatted.push(hsl[2]);

		console.log(hslFormatted);
		console.log(hsl);

		// entity icon
		let cssAccent = generateCSSAccent(hsl, gOpacity);
		let cssAccentHex = hslToHex(...hslFormatted);
		let cssBgProp = `linear-gradient(${cssAccent}, transparent)`;
		bgEl.style.display = 'none';
		bgEl.style.background = cssBgProp;
		bgEl.style.display = 'block';

		let blendedAccent = blend('#1e1d2a', cssAccentHex, gOpacity);
		document
			.getElementById('theme-meta')
			.setAttribute('content', blendedAccent);
	});
</script>

<svelte:head>
	<meta id="theme-meta" name="theme-color" />
</svelte:head>
<div
	class="
z-10 h-0 w-0
"
>
	<div
		id="bg-grad"
		class="
	absolute top-0 left-0 w-screen h-4/5
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
		animation: 0.8s top-in;
	}
</style>
