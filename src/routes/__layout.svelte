<script>
  import Header from '@lib/header/Header.svelte';
</script>

<main class="bg-white dark:bg-purple-dark min-h-screen min-w-screen">
  <Header />
  <div id="app">
    <slot />
  </div>
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  #app {
    max-width: 1440px;
    margin: auto;
    padding: 0 36px;
    padding-bottom: 200px;
  }
</style>
