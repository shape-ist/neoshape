<script>
	import Preview from './src/Preview.svelte';
	import Overview from './src/Overview.svelte';
	import Jobs from './src/Jobs.svelte';
	export let entityJSON;
	if (entityJSON.result.length <= 0) {
		console.log('404 should happen here wops');
	}
</script>

<div
	class="
	flex flex-col md:flex-row mt-0 px-0 mx-0
	lg:px-10 lg:mx-32
	md:px-6 md:mt-36
"
>
	<Preview
		title={entityJSON.result[0].title}
		text={entityJSON.result[0].preview}
		entityType={'project'}
	/>
	<div>
		<Overview text={entityJSON.result[0].overview} />
		<Jobs />
	</div>
</div>
