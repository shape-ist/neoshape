<script>
	import Preview from './Preview.svelte';
	import Overview from './Overview.svelte';
	import Jobs from './Jobs.svelte';
	export let entityJSON = {};
</script>

<div
	class="
	flex flex-col md:flex-row mt-0 px-0 mx-0
	lg:px-10 lg:mx-32
	md:px-6 md:mt-36
"
>
	<Preview />
	<div>
		<Overview />
		<Jobs />
	</div>
</div>
