<script>
  import Preview from './src/Preview.svelte';
  import Overview from './src/Overview.svelte';
  import Jobs from './src/Jobs.svelte';
  import Socials from './src/Socials.svelte';
  import Button from '../../lib/Button.svelte';
  export let entityJSON;
  let extendedBtn = entityJSON.result[0].extendedBtn;
  extendedBtn =
    extendedBtn == undefined
      ? 'err'
      : extendedBtn.url == undefined || extendedBtn.name == undefined
      ? 'err'
      : extendedBtn;
  export let eBtn = extendedBtn;
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
      {entityJSON}
    />
  </div>
  <div class="flex flex-row">
    <div>
      <Overview text={entityJSON.result[0].overview} />
      <Jobs jobs={entityJSON.result[0].jobs} />
      {#if eBtn != 'err'}
        <div class="pt-16">
          <Button href={eBtn.url} text={eBtn.name} />
        </div>
      {/if}
    </div>
    <Socials data={entityJSON.result[0]} />
  </div>
</div>
