<script>
	import Button from '@lib/Button.svelte';
	import Blob from './blob/Blob1.svelte';
	import * as jq from 'jquery';
	export let scrollToElement = function (el, ms) {
		var speed = ms ? ms : 600;
		jq('html,body').animate(
			{
				scrollTop: jq(el).offset().top,
			},
			speed
		);
	};
</script>

<div style="height:80vh;">
	<div
		id="blob-wrapper"
		class="
	hidden
	z-10
	md:block
	relative
	dark:filter dark:contrast-125 dark:brightness-110 dark:-hue-rotate-15
	"
	>
		<Blob h="100%" w="auto" />
	</div>

	<div class="h-screen">
		<div
			class="w-full flex items-left justify-center flex-col h-4/6
	sm:h-4/5"
		>
			<h1
				class="
	align-left font-secondary font-bold text-5xl mb-4 leading-90 z-40 text-black
	lg:text-7xl
	dark:text-white
	"
			>
				We shape <br /> the future.
			</h1>
			<Button
				text="Learn More"
				extraClass="z-40"
				click={() => {
					scrollToElement(jq('#who-anchor'), 400);
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
