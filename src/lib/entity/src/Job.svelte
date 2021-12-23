<script>
  import Button from '@lib/Button.svelte';
  export let job;
</script>

<div class="mb-16 mt-6">
  <h2
    class="mb-4 font-title font-bold text-xl leading-110 text-black
    dark:text-white
	md:text-2xl
	"
  >
    {job.jobTitle}
  </h2>
  <p
    class="text-sm text-gray-600 leading-snug
dark:text-gray-400
md:text-lg md:leading-snug
"
  >
    {job.jobDescription}
  </p>
  <div
    class="my-8 flex flex-col items-start
	md:flex-row md:items-center"
  >
    <Button
      href={job.jobAvailability ? job.jobApplicationURL : ''}
      text={job.jobAvailability ? 'Apply For Job' : 'Job Unavailable'}
      active={job.jobAvailability ? true : false}
      blank="true"
    />
    <p
      class="
                text-gray-400 font-title font-medium text-xs mt-4 ml-1
                dark:text-gray-600
                md:ml-6 md:mt-0
                {!job.jobAvailability ? 'hidden' : ''}
                "
    >
      Job Available
    </p>
  </div>
</div>
