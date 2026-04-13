<script lang="ts">
	import type { Post } from '$lib/data/posts';

	let { post }: { post: Post } = $props();
	let upvoted = $state(false);
	let saved = $state(false);
	let upvoteOffset = $state(0);

	function toggleUpvote() {
		upvoted = !upvoted;
		upvoteOffset = upvoted ? 1 : 0;
	}

	const typeColors: Record<string, string> = {
		Component: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
		Code: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
		Insight: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
	};
</script>

<article
	class="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(0,200,150,0.06)] md:p-8"
>
	<!-- Header -->
	<div class="mb-4 flex flex-wrap items-center gap-2.5">
		<span class="rounded-md border border-primary/25 bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
			{post.category}
		</span>
		<span class="rounded-md border px-2.5 py-0.5 text-xs font-medium {typeColors[post.type]}">
			{post.type}
		</span>
		<span class="ml-auto font-mono text-xs text-text-muted/40">{post.date}</span>
	</div>

	<!-- Title -->
	<h3 class="font-heading text-lg font-semibold leading-snug text-text transition-colors duration-200 group-hover:text-primary md:text-xl">
		{post.title}
	</h3>

	<!-- Description -->
	<p class="mt-3 text-sm leading-relaxed text-text-muted">
		{post.description}
	</p>

	<!-- Code Preview -->
	{#if post.codePreview}
		<div class="mt-5 overflow-hidden rounded-xl border border-border bg-bg">
			<div class="flex items-center gap-2 border-b border-border px-4 py-2.5">
				<div class="h-2.5 w-2.5 rounded-full bg-red-500/60"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-yellow-500/60"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-green-500/60"></div>
				<span class="ml-2 font-mono text-[10px] uppercase tracking-widest text-text-muted/30">Preview</span>
			</div>
			<pre class="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-text-muted"><code>{post.codePreview}</code></pre>
		</div>
	{/if}

	<!-- Insight -->
	<div class="mt-5 rounded-xl border border-primary/10 bg-primary/[0.03] p-4">
		<div class="mb-2 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
				<path d="M12 2v1" /><path d="M12 21v1" /><path d="m4.93 4.93.7.7" /><path d="m17.36 17.36.7.7" /><path d="M2 12h1" /><path d="M21 12h1" /><path d="m4.93 19.07.7-.7" /><path d="m17.36 6.64.7-.7" /><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /><path d="M12 8a2.83 2.83 0 0 0-2 .83A2.83 2.83 0 0 0 12 12" />
			</svg>
			<span class="text-xs font-semibold uppercase tracking-wider text-primary/70">Why it's built this way</span>
		</div>
		<p class="text-sm leading-relaxed text-text-muted">
			{post.insight}
		</p>
	</div>

	<!-- Footer -->
	<div class="mt-6 flex items-center gap-5 border-t border-border pt-5">
		<!-- Upvote -->
		<button
			onclick={toggleUpvote}
			class="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-200
				{upvoted
				? 'bg-primary/15 text-primary'
				: 'text-text-muted hover:bg-surface-hover hover:text-text'}"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={upvoted ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
			</svg>
			<span class="font-mono text-xs font-medium">{post.upvotes + upvoteOffset}</span>
		</button>

		<!-- Comments -->
		<div class="flex items-center gap-1.5 text-sm text-text-muted">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			</svg>
			<span class="font-mono text-xs">{post.comments}</span>
		</div>

		<!-- Bookmark -->
		<button
			onclick={() => (saved = !saved)}
			class="ml-auto rounded-lg p-1.5 transition-all duration-200
				{saved
				? 'text-primary'
				: 'text-text-muted hover:text-text'}"
			aria-label="Save post"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
			</svg>
		</button>
	</div>

	<!-- Hover glow -->
	<div class="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100"></div>
</article>
