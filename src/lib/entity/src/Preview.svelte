<script>
	import { onMount } from 'svelte';
	import {
		getAverageRGB,
		rgbToHsl,
		generateCSSAccent,
		blend,
		hslToHex,
		rgbToHex,
	} from './color';
	export let iconSrc =
		'data:image/jpeg;base64,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';
	onMount(() => {
		let mainElement = document.getElementsByTagName('main')[0];
		let mainStyle = window.getComputedStyle(mainElement);
		let bgColor = mainStyle.getPropertyValue('background-color');
		bgColor = rgbToHex(
			...bgColor
				.replace('rgb', '')
				.replace('(', '')
				.replace(')', '')
				.split(',')
				.map(function (item) {
					return parseInt(item, 10);
				})
		);

		let gOpacity = 0.2;

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

		// entity icon
		let cssAccent = generateCSSAccent(hsl, gOpacity);
		let cssAccentHex = hslToHex(...hslFormatted);
		let cssBgProp = `linear-gradient(${cssAccent}, transparent)`;
		bgEl.style.display = 'none';
		bgEl.style.background = cssBgProp;
		bgEl.style.display = 'block';

		console.log(bgColor);

		let blendedAccent = blend(bgColor, cssAccentHex, gOpacity);
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
	w-full justify-center flex-col mb-20
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
