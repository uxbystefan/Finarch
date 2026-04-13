<script lang="ts">
	import { categories, types } from '$lib/data/posts';
	import type { PostCategory, PostType } from '$lib/data/posts';

	let {
		activeCategory = $bindable('All'),
		activeType = $bindable('All'),
		activeSort = $bindable('Latest')
	}: {
		activeCategory: string;
		activeType: string;
		activeSort: string;
	} = $props();

	const allCategories: ('All' | PostCategory)[] = ['All', ...categories];
	const allTypes: ('All' | PostType)[] = ['All', ...types];
	const sortOptions = ['Latest', 'Most Upvoted'] as const;
</script>

<div class="space-y-4">
	<!-- Category Pills -->
	<div class="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
		<span class="shrink-0 text-xs font-medium uppercase tracking-wider text-text-muted/50">Category</span>
		<div class="flex gap-2">
			{#each allCategories as cat}
				<button
					onclick={() => (activeCategory = cat)}
					class="shrink-0 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200
						{activeCategory === cat
						? 'bg-primary/15 text-primary border border-primary/30'
						: 'border border-border text-text-muted hover:border-primary/20 hover:text-text'}"
				>
					{cat}
				</button>
			{/each}
		</div>
	</div>

	<!-- Type + Sort Row -->
	<div class="flex flex-wrap items-center justify-between gap-4">
		<div class="flex items-center gap-3 overflow-x-auto scrollbar-hide">
			<span class="shrink-0 text-xs font-medium uppercase tracking-wider text-text-muted/50">Type</span>
			<div class="flex gap-2">
				{#each allTypes as type}
					<button
						onclick={() => (activeType = type)}
						class="shrink-0 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200
							{activeType === type
							? 'bg-primary/15 text-primary border border-primary/30'
							: 'border border-border text-text-muted hover:border-primary/20 hover:text-text'}"
					>
						{type}
					</button>
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-2">
			<span class="shrink-0 text-xs font-medium uppercase tracking-wider text-text-muted/50">Sort</span>
			<div class="flex gap-2">
				{#each sortOptions as sort}
					<button
						onclick={() => (activeSort = sort)}
						class="shrink-0 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200
							{activeSort === sort
							? 'bg-primary/15 text-primary border border-primary/30'
							: 'border border-border text-text-muted hover:border-primary/20 hover:text-text'}"
					>
						{sort}
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
