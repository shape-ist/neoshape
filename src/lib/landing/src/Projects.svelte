<script>
  import Apps from './Apps.svelte';
  import Button from '@lib/Button.svelte';
  import ContentSpacer from './ContentSpacer.svelte';
</script>

<ContentSpacer />

<div
  class="
flex flex-col justify-between items-center
md:flex-row
md:px-20
"
>
  <div class="max-w-xl">
    <h1
      class="
			text-left w-full mb-4 text-3xl font-title font-bold
			md:text-4xl
			dark:text-white
			"
    >
      Projects
    </h1>
    <p
      class="
		mb-8 leading-snug text-xl
		dark:text-gray-200
		"
    >
      After completing our courses, we provide our members with promising
      opportunities to apply their knowledge and expertise to real life as we
      offer them a chance to join one of Shape’s many projects. Our projects
      include start-ups, research projects and even online art shows by our
      artist community! Our selection method to picking members who will
      contribute to our projects rely solely on their dedication to self-improve
      as we strongly believe that passionate individuals create devout
      communities who can change the world!
    </p>
    <Button text="Explore Projects" href="/projects" />
  </div>
  <!--
	<div class="max-w-2xl">
		<Apps />
	</div>
	-->
</div>
