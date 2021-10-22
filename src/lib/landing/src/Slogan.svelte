<script>
	import Button from '@lib/Button.svelte';
	import Blob from './blob/Blob1.svelte';
</script>

<div id="blob-wrapper" class="z-10">
	<Blob h="500vh" w="auto" />
</div>

<div
	class="w-full flex items-left justify-center flex-col"
	style="height: 80vh;"
>
	<h1
		class="
		align-left font-secondary font-bold text-6xl mb-2
	"
	>
		We shape <br /> the future.
	</h1>
	<Button text="Learn More" href="/about" />
</div>

<style>
	#blob-wrapper {
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(50%, -100%);
		height: 200vh;
	}
	#blob {
		height: 100%;
		width: 100%;
		display: none;
	}
</style>
