<script>
  import { generateCDNURL } from '@lib/helpers/sanity';
  import Button from '@lib/Button.svelte';
  export let data;
  console.log(data);
</script>

<div class="flex flex-row ml-10">
  <div
    class="shadow-xl dark:shadow-none rounded-3xl p-16 py-20 bg-white dark:bg-purple-dark-secondary"
  >
    <div>
      <span
        class="uppercase font-bold font-secondary text-gray-400 dark:text-gray-300 pb-4"
      >
        {data.entityType}
      </span>
      <h2
        class="font-title font-bold text-3xl leading-relaxed py-2 text-black dark:text-white"
      >
        {data.title}
      </h2>
      <p class="text-gray-600 dark:text-gray-300">
        {data.preview}
      </p>
      <div class="pt-8">
        <Button text="Learn More" href={`/p/${data.slug.current}`} />
      </div>
    </div>
  </div>
  <div
    class="bg-gray-100 shadow-lg h-32 w-32 -translate-x-2/3 -translate-y-1/3"
    style="border-radius: 25%; flex-shrink: 0;"
  >
    <img
      src={generateCDNURL(data.icon).width(256).height(256).url()}
      alt="icon"
      style="border-radius: 25%"
    />
  </div>
</div>
