<script>
  import { generateCDNURL } from '@lib/helpers/sanity';
  export let title;
  export let text;
  export let entityType;
  export let iconFile;
  export let entityJSON;
  import Meta from './Meta.svelte';
  import { onMount } from 'svelte';
  import colorMount from './color';
  onMount(() => {
    colorMount(document);
  });
</script>

<svelte:head>
  <meta id="theme-meta" name="theme-color" />
</svelte:head>

<div
  class="
z-10 h-0 w-0 md:hidden
"
>
  <div
    id="bg-grad"
    class="
	fixed top-0 left-0 w-screen h-5/6 z-0
	"
  />
</div>
<div
  class="
	w-full justify-center flex-col mb-20
	md:mr-16 md:max-w-xs z-40
	"
>
  <div
    class="mx-10
	md:mx-0
	"
  >
    <img
      id="entity-icon"
      src={generateCDNURL(iconFile)
        .width(256)
        .height(256)
        .format('webp')
        .fit('clip')}
      alt={`${title} icon`}
      crossOrigin="anonymous"
      style="
			box-shadow: 0 20px 20px -12px rgba(0,0,0,.12);
			border-radius: 15%;
			"
      class="
			w-full h-full dark:bg-gray-800 bg-gray-200 relative
			"
    />
  </div>
  <h1
    class="text-center mt-6 font-title font-bold text-2xl px-10 leading-110 text-black
		dark:text-white
		md:text-left md:px-0 md:pr-4 md:text-4xl md:mt-0
		"
  >
    <span
      class="text-gray-500 px-8 text-xs uppercase leading-loose
			dark:text-gray-400
            md:p-0
			"
    >
      {entityType}
    </span>
    <br />
    <span> {title} </span>
  </h1>
  <p
    class="
leading-110 mt-4 text-gray-500 text-center px-8 text-sm mb-6
dark:text-gray-400
md:text-left md:px-0 md:pr-4 md:text-md md:leading-snug
"
  >
    {text}
  </p>
  <Meta data={entityJSON} />
</div>

<style>
  @keyframes top-in {
    from {
      opacity: 0;
      transform: translateY(-720px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  #bg-grad {
    transition: opacity 0.65s;
    animation: 0.75s top-in;
  }
</style>
