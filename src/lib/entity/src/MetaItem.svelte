<script>
  export let key;
  export let value;
</script>

<ul class="list-none pt-3">
  <li>
    <p
      class="
        font-secondary leading-snug
        "
    >
      <b
        class="
        text-black
        dark:text-white
        "
      >
        {key}
        <span> : </span>
      </b>
      <span
        class="
    text-gray-600
    dark:text-gray-400
    "
      >
        {value}
      </span>
    </p>
  </li>
</ul>
