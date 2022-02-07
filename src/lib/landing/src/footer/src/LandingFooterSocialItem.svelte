<script>
  export let href = '';
  export let handle = '';
  export let platform = '';
</script>

<p class="py-1 text-center">
  <a {href} target="_blank" class="leading-relaxed text-center">
    {handle}
  </a>
  <span>
    on {platform}
  </span>
</p>
