<script>
	import Preview from './src/Preview.svelte';
	import Overview from './src/Overview.svelte';
	import Jobs from './src/Jobs.svelte';
</script>

<div class="flex flex-col md:flex-row">
	<Preview />
	<div>
		<Overview />
		<Jobs />
	</div>
</div>
