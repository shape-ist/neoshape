<script>
  import Preview from './src/Preview.svelte';
  import Overview from './src/Overview.svelte';
  import Jobs from './src/Jobs.svelte';
  export let entityJSON;
</script>

<svelte:head>
  <title>
    {entityJSON.result[0].title} by Shape
  </title>
</svelte:head>

<div
  class="
	flex flex-col md:flex-row mt-0 px-0 mx-0
	lg:px-10 lg:mx-32
	md:px-6 md:mt-36
"
>
  <div class="mr-16">
    <Preview
      title={entityJSON.result[0].title}
      text={entityJSON.result[0].preview}
      iconFile={entityJSON.result[0].icon}
      entityType={'project'}
    />
  </div>
  <div>
    <Overview text={entityJSON.result[0].overview} />
    <Jobs jobs={entityJSON.result[0].jobs} />
  </div>
</div>
