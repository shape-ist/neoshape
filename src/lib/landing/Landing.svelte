<script>
  import Slogan from './src/Slogan.svelte';
  import Who from './src/Who.svelte';
  import Projects from './src/Projects.svelte';
  import Brands from './src/Brands.svelte';
  import LandingFooter from './src/footer/LandingFooter.svelte';
</script>

<Slogan />
<Who />
<div class="flex flex-col md:flex-row md:pt-96">
  <Projects />
  <Brands />
</div>
<LandingFooter />
