<!-- <script>
	import { onMount } from 'svelte';
	function setTheme(themeName) {
		onMount(() => {
			localStorage.setItem('theme', themeName);
			document.documentElement.className = themeName;
		});
	}

	function toggleTheme() {
		onMount(() => {
			if (localStorage.getItem('theme') === 'light') {
				setTheme('dark');
			} else {
				setTheme('light');
			}
		});
	}
	onMount(() => {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	});
</script>

<button on:click={toggleTheme()}>uwu</button>
 -->
