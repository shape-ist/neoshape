<script type="module">
	import { overrideTailwindClasses } from 'tailwind-override';
	export let text = 'Title';
	export let extraClass = '';
	let defaultTheme = `
	text-center w-full mb-4 text-2xl font-title font-bold
	`;
	let defaultClasslist = overrideTailwindClasses(defaultTheme + extraClass);
	breakpointClassList = `
	md:text-4xl
	`;
	export let classList = defaultClasslist + breakpointClassList;
</script>

<h1 class={classList}>
	{text}
</h1>
