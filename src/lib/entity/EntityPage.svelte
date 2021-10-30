<script>
	import Preview from './src/Preview.svelte';
	import Overview from './src/Overview.svelte';
	import Jobs from './src/Jobs.svelte';
</script>

<div
	class="
	flex flex-col md:flex-row mt-0
	lg:px-40
	md:px-6 md:mt-36
"
>
	<Preview />
	<div>
		<Overview />
		<Jobs />
	</div>
</div>
