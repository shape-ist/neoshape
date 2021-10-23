<script type="module">
	import Apps from './Apps.svelte';
	import Title from './Title.svelte';
	import Button from '@lib/Button.svelte';
</script>

<div
	class="
flex flex-col justify-between items-center mt-80
md:flex-row"
>
	<div class="max-w-xl">
		<Title text="Projects" extraClass="text-left" />
		<p
			class="
		mb-8 leading-snug text-xl
		md:mr-32
		"
		>
			After completing our courses, we provide our members with promising
			opportunities to apply their knowledge and expertise to real life as
			we offer them a chance to join one of Shape’s many projects. Our
			projects include start-ups, research projects and even online art
			shows by our artist community! Our selection method to picking
			members who will contribute to our projects rely solely on their
			dedication to self-improve as we strongly believe that passionate
			individuals create devout communities who can change the world!
		</p>
		<Button text="See Projects" href="/projects" />
	</div>
	<div class="max-w-2xl">
		<Apps />
	</div>
</div>
