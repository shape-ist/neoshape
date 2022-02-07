<script>
  import MetaItem from './MetaItem.svelte';
  export let data;
  let meta = [];
  try {
    data.result[0].metadata.forEach((item) => {
      meta.push({ key: item.name, value: item.content });
    });
  } catch {
    meta = [];
  }
  export let m = meta;
</script>

<div class="w-full flex flex-col items-center md:block">
  {#each m as metaItem}
    <MetaItem key={metaItem.key} value={metaItem.value} />
  {/each}
</div>
