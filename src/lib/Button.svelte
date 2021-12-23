<script>
  import { overrideTailwindClasses } from 'tailwind-override';
  export let text = 'Button';
  export let click = null;
  export let active = true;
  export let href = '';
  export let extraClass = '';
  export let blank = 'false';
  let blankBool = false;
  if (blank == 'false') {
    blankBool = false;
  } else {
    blankBool = true;
  }
  export let target = blankBool ? '_blank' : '_self';
  let defaultTheme = `
        transition-all
        font-bold
		    font-title
        my-2
        cursor-pointer
        bg-purple-600 text-purple-50 px-6 rounded-lg drop-shadow-sm
        pb-1 pt-2
    `;
  let preClassListNoPseudo = overrideTailwindClasses(defaultTheme + extraClass);
  let preClassList =
    preClassListNoPseudo +
    `
		hover:bg-purple-600 hover:drop-shadow-lg
    active:bg-indigo-700 active:transform active:scale-90
		dark:bg-purple-300 dark:text-purple-dark
		dark:active:bg-purple-400 dark:active:text-indigo-900
	`;
  let inactiveClassList = overrideTailwindClasses(
    preClassListNoPseudo +
      `
    pointer-events-none active:transform active:scale-40
    bg-gray-400 text-gray-700 opacity-50
  `
  );
  export let classList = !active ? inactiveClassList : preClassList;
</script>

<div
  class={active ? 'active:transform active:scale-90 transition-all' : ''}
  style="width: fit-content; height: fit-content"
>
  {#if click != null}
    <button
      style="width: fit-content; height: fit-content; line-height:120%;"
      class={classList}
      on:click={click}
    >
      {text}
    </button>
  {:else if href != ''}
    <a
      href={active ? href : ''}
      style="width: fit-content;"
      class={classList}
      {target}
    >
      {text}
    </a>
  {:else}
    <button style="width: fit-content;" class={classList} on:click={() => {}}>
      {text}
    </button>
  {/if}
</div>
