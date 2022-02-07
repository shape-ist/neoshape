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
      We provide a supportive learning environment for high school students who
      want to improve themselves. We offer a large selection of courses from
      arts, technology and academics. Our courses will be aimed to acknowledge
      our members’ devotion to better themselves and value their willingness to
      take initiative regardless of their status. We invite everyone who desires
      a better tomorrow to join and shape the future with us!
    </p>
    <Button text="See details" href="/brands" />
  </div>
</div>
