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
      While we believe that knowledge is profitable, not all of our motivation
      lies in money. We advocate that through empathy and kind-hearted action,
      the world can become a much more livable and enjoyable place. Whether from
      raising seaweeds in the Marmara Sea to prevent climate change or providing
      pro-bono counseling to high school students through their university
      entrance journeys, we are here to spread joy.
    </p>
    <Button text="Explore Projects" href="/projects" />
  </div>
  <!--
	<div class="max-w-2xl">
		<Apps />
	</div>
	-->
</div>
