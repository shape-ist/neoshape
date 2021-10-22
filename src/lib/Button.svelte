<script>
	export let text = 'Button';
	export let click = null;
	export let href = '';
	export let btnClasses = ` 
        transition-all
        font-medium
        font-secondary
        my-2
        cursor-pointer	
        bg-purple-500 text-white px-6 py-1 rounded-xl drop-shadow-sm
        hover:bg-purple-600 hover:drop-shadow-lg
        active:bg-indigo-700 active:transform active:scale-90
    `;
</script>

{#if click != null}
	<button style="width: fit-content;" class={btnClasses} on:click={click}>
		{text}
	</button>
{:else if href != ''}
	<a {href} style="width: fit-content;" class={btnClasses}>
		{text}
	</a>
{:else}
	<button style="width: fit-content;" class={btnClasses} on:click={() => {}}>
		{text}
	</button>
{/if}
