<script>
	import EntityContentWrapper from './src/EntityContentWrapper.svelte';
	import { queryContent } from '@lib/helpers/sanity.js';
	let type = 'project';
	let slug = 'the-istanbul-chronicle';
	export let out = queryContent(
		`*[_type == '${type}' && slug.current == '${slug}']`
	);
</script>

<EntityContentWrapper entityJSON={out} />
