<script>
  import HeaderBtn from './src/HeaderBtn.svelte';
  import ThemeBtn from './src/ThemeBtn.svelte';
  import Logo from '@lib/Logo.svelte';
</script>

<header
  class="
	flex z-50 w-full h-20 justify-center items-center sticky top-0 mb-20 bg-gradient-to-b from-bg-grad-light
	dark:from-bg-grad-dark
	"
>
  <div
    class="
		flex transition-all duration-500
		px-10 justify-center items-center absoulte sticky top-0 h-full object-fit bg-gray-50 shadow-shape-light border-gray-200 border
		w-auto rounded-3xl mt-10 pr-16 md:pr-10
		dark:bg-purple-dark-secondary dark:border-transparent dark:shadow-shape-dark
		"
    style="max-width: 90vw;"
  >
    <a
      href="/"
      class="
		mr-8 text-black
		dark:text-white
		"
    >
      <div class="hidden md:block">
        <Logo fill="currentColor" />
      </div>
    </a>
    <div class="h-1/3 border border-gray-400s mr-3 hidden md:block" />
    <HeaderBtn to="/" title="Home" />
    <HeaderBtn to="/projects" title="Projects" />
    <HeaderBtn to="/brands" title="Brands" />
    <ThemeBtn />
  </div>
</header>
