<script>
	import { fetchSanityAPI } from '@lib/helpers/sanity.js';
	fetchSanityAPI(
		'https://uzmzj3zh.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27project%27%20%26%26%20slug.current%20%3D%3D%20%27the-istanbul-chronicle1%27%5D'
	).then((data) => {
		console.log(data);
	});
</script>

<svelte:head>
	<title>Shape Projects</title>
</svelte:head>

<h1 class="font-big-title font-medium text-xl">Project Page</h1>
