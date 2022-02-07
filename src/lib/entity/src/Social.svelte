<script>
  export let data;
</script>

<a href={data.href}>
  <div class="cursor-pointer h-12 w-12 ml-12 mt-4 icon-wrapper">
    <img
      src={data.icon}
      alt="Social icon"
      class="h-12 w-12 bg-white rounded-lg"
    />
  </div>
</a>
