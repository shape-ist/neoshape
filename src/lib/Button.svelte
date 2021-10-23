<script type="module">
	import { overrideTailwindClasses } from 'tailwind-override';
	export let text = 'Button';
	export let click = null;
	export let href = '';
	export let extraClass = '';
	let defaultTheme = `
        transition-all
        font-medium
        font-secondary
        my-2
        cursor-pointer
        bg-purple-500 text-white px-6 py-2 rounded-xl drop-shadow-sm
    `;
	export let classList =
		overrideTailwindClasses(defaultTheme + extraClass) +
		`
		hover:bg-purple-600 hover:drop-shadow-lg
        active:bg-indigo-700 active:transform active:scale-90
	`;
</script>

<div
	class="active:transform active:scale-90 transition-all"
	style="width: fit-content; height: fit-content"
>
	{#if click != null}
		<button style="width: fit-content;" class={classList} on:click={click}>
			{text}
		</button>
	{:else if href != ''}
		<a {href} style="width: fit-content;" class={classList}>
			{text}
		</a>
	{:else}
		<button
			style="width: fit-content;"
			class={classList}
			on:click={() => {}}
		>
			{text}
		</button>
	{/if}
</div>
