<script>
  import Blob2 from './blob/Blob2.svelte';
</script>

<div class="w-full h-1" style="transform:translateY(-120px)" id="who-anchor" />
<div class="w-full flex items-center justify-center">
  <div
    class="
	blob absolute left-0
	dark:filter dark:contrast-125 dark:brightness-110 dark:-hue-rotate-15
	"
  >
    <Blob2 w="1000px" />
  </div>
  <div
    class="
    z-40
    w-screen bg-white shadow-shape-light rounded-2xl py-24 px-12
    md:py-32 md:px-28 lg:w-1/2
	dark:bg-purple-dark-secondary dark:shadow-shape-dark
    "
    id="who-are-we"
  >
    <h1
      class="
			text-center w-full mb-8 text-3xl font-title font-bold
			md:text-4xl
			dark:text-white
			"
    >
      Who are we?
    </h1>
    <p
      class="
        leading-snug text-gray-600 text-sm
        sm:text-center sm:text-xl
		dark:text-gray-200
		"
    >
      As Team Shape, we are trying to establish a culture where people are
      valued based on their character, knowledge and their willingness to take
      initiative rather than their age and position. As Shape, we believe that
      everything interesting flourishes with novelty, and we try to offer our
      community a chance to innovate and shape our society's future.
    </p>
  </div>
</div>

<style>
  .blob {
    transform: translate(-55%, -5%) rotate(60deg);
  }
</style>
