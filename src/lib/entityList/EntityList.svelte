<script>
  import EntityCard from './src/EntityCard.svelte';
  export let title;
  export let data;
</script>

<div class="max-w-screen-xl m-auto py-20 px-10">
  <div class="text-black dark:text-white">
    <h1 class="text-5xl text-center px-4 pb-12 font-bold font-secondary">
      {title}
    </h1>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 pt-20">
    {#each data as d}
      <EntityCard data={d} />
    {/each}
  </div>
</div>
