<script lang="ts">
	import FilterBar from '$lib/components/FilterBar.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import { posts } from '$lib/data/posts';

	let activeCategory = $state('All');
	let activeType = $state('All');
	let activeSort = $state('Latest');

	let filteredPosts = $derived.by(() => {
		let result = posts;

		if (activeCategory !== 'All') {
			result = result.filter((p) => p.category === activeCategory);
		}
		if (activeType !== 'All') {
			result = result.filter((p) => p.type === activeType);
		}

		if (activeSort === 'Most Upvoted') {
			result = [...result].sort((a, b) => b.upvotes - a.upvotes);
		} else {
			result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		}

		return result;
	});
</script>

<svelte:head>
	<title>Design & Code — Finarch</title>
	<meta name="description" content="Explore fintech components, code, and the thinking behind them." />
</svelte:head>

<main class="min-h-screen pt-24 pb-20">
	<!-- Page Header -->
	<div class="mx-auto max-w-3xl px-6">
		<div class="mb-10">
			<h1 class="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
				Design <span class="text-primary">&</span> Code
			</h1>
			<p class="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
				Explore fintech components, code, and the thinking behind them.
			</p>
		</div>

		<!-- Filters -->
		<div class="mb-10">
			<FilterBar bind:activeCategory bind:activeType bind:activeSort />
		</div>

		<!-- Results Count -->
		<div class="mb-6 flex items-center justify-between">
			<p class="font-mono text-xs text-text-muted/50">
				{filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
			</p>
		</div>

		<!-- Post Feed -->
		<div class="space-y-5">
			{#each filteredPosts as post (post.id)}
				<PostCard {post} />
			{/each}

			{#if filteredPosts.length === 0}
				<div class="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface py-20 text-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-4 text-text-muted/30">
						<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
					</svg>
					<p class="text-sm text-text-muted">No posts match your filters.</p>
					<button
						onclick={() => { activeCategory = 'All'; activeType = 'All'; }}
						class="mt-3 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
					>
						Clear filters
					</button>
				</div>
			{/if}
		</div>
	</div>
</main>
