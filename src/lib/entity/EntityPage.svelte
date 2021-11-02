<script>
	import EntityContentWrapper from './src/EntityContentWrapper.svelte';
	export let entityAPIUrl = '';
	console.log(entityAPIUrl);
	// should generate a json output that will be passed to entity content wrapper
	export let out = {};
</script>

<EntityContentWrapper entityJSON={out} />
