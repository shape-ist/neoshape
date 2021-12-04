<script>
  import Job from './Job.svelte';
  export let jobs;
</script>

<div class="mb-16">
  <h1
    class="font-title font-bold text-3xl leading-110 text-black
    dark:text-white
	md:text-4xl
	"
  >
    Jobs
  </h1>
  {#each jobs as job}
    <Job {job} />
  {/each}
</div>
