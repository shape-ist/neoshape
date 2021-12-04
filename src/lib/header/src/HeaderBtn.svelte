<script>
  import { page } from '$app/stores';
  export let to = '/';
  export let title = 'Button';
</script>

<div class="flex flex-row">
  <a
    class:active={$page.path === to}
    sveltekit:prefetch
    class="
		font-title text-gray-600 font-medium px-5 align-middle text-sm py-4
		dark:text-white
		"
    href={to}
  >
    {title}
    {#if $page.path === to}
      <div
        class="
				bg-gray-800 h-1 w-1/2 rounded-full mt-1 m-auto transform -translate-y-1
				dark:bg-white
				"
      />
    {/if}
  </a>
</div>

<style>
  .active {
    @apply font-bold transform translate-y-1;
  }
</style>
