<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Finarch — Design, Discuss, Build Fintech</title>
	<meta name="description" content="A place where fintech products are designed, discussed, and built." />
</svelte:head>

<Navbar />
{@render children()}
