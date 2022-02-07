<script>
  import Button from '@lib/Button.svelte';
</script>

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
      Brands
    </h1>
    <p
      class="
		mb-8 leading-snug text-xl
		dark:text-gray-200
		"
    >
      At Shape, we believe that every piece of information is profitable if
      realized through action. Thus, we provide our members with working
      opportunities to use their creative knowledge in our startups. Since we
      believe that every industry needs a little bit more a Shape Flare, we make
      sure that we are involved in and improve every industry we can:
      journalism, marketing, and even fashion… To learn more about our startups
      and income streams click the button below.
    </p>
    <Button text="See details" href="/brands" />
  </div>
</div>
