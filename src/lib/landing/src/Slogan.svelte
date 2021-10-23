<script type="module">
	import Button from '@lib/Button.svelte';
	import Blob from './blob/Blob1.svelte';
</script>

<div style="height:80vh;">
	<div
		id="blob-wrapper"
		class="
	hidden
	z-10
	md:block
	"
	>
		<Blob h="100%" w="auto" />
	</div>

	<div class="h-screen">
		<div
			class="w-full flex items-left justify-center flex-col h-3/5
	lg:h-4/5"
		>
			<h1
				class="
	align-left font-secondary font-bold text-5xl mb-2 leading-90 z-40 text-black
	lg:text-7xl
	"
			>
				We shape <br /> the future.
			</h1>
			<Button
				text="Learn More"
				extraClass="z-40"
				click={() => {
					// TODO: scroll to 'who are we' card
				}}
			/>
		</div>
	</div>
</div>

<style>
	#blob-wrapper {
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(45%, -25%) rotate(20deg);
		height: 200vh;
	}
</style>
