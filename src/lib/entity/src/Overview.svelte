<script>
	import { onMount } from 'svelte';
	onMount(() => {
		var rgb = getAverageRGB(document.getElementById('entity-icon'));
		console.log(rgb);
	});
	function getAverageRGB(imgEl) {
		var blockSize = 5, // only visit every 5 pixels
			defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
			canvas = document.createElement('canvas'),
			context = canvas.getContext && canvas.getContext('2d'),
			data,
			width,
			height,
			i = -4,
			length,
			rgb = { r: 0, g: 0, b: 0 },
			count = 0;

		if (!context) {
			return defaultRGB;
		}

		height = canvas.height =
			imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
		width = canvas.width =
			imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

		context.drawImage(imgEl, 0, 0);

		try {
			data = context.getImageData(0, 0, width, height);
		} catch (e) {
			/* security error, img on diff domain */ alert('x');
			return defaultRGB;
		}

		length = data.data.length;

		while ((i += blockSize * 4) < length) {
			++count;
			rgb.r += data.data[i];
			rgb.g += data.data[i + 1];
			rgb.b += data.data[i + 2];
		}

		// ~~ used to floor values
		rgb.r = ~~(rgb.r / count);
		rgb.g = ~~(rgb.g / count);
		rgb.b = ~~(rgb.b / count);

		return rgb;
	}
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
		class="
text-center mt-10 font-title font-bold text-2xl px-10 leading-110
">The Istanbul Chronicle</h1
	>
	<p
		class="
leading-110 mt-4 text-gray-500 text-center px-8 text-sm
"
	>
		As The Istanbul Chronicle, we deem that true information should be
		accessible by everyone, so we provide our readers news that is
		objective, clear and independent from bias. We search for verified
		sources of information because we believe that from truth, comes
		liberation.
	</p>
</div>
