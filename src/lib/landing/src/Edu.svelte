<script>
  import Button from '@lib/Button.svelte';
</script>

<div
  class="
flex flex-col justify-between items-center mt-48
md:flex-row"
>
  <div class="max-w-xl">
    <h1
      class="
			text-left w-full mb-4 text-3xl font-title font-bold
			md:text-4xl
			dark:text-white
			"
    >
      Education
    </h1>
    <p
      class="
		mb-8 leading-snug text-xl
		md:mr-32
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
    <Button text="See details" href="/projects" />
  </div>
  <!--
	<div class="max-w-2xl"> Graphic comes here </div>
    -->
</div>
