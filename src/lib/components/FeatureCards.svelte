<script lang="ts">
	const features = [
		{
			title: 'News from the industry',
			description:
				'Stay ahead with curated insights, market trends, and breaking developments from the global fintech ecosystem.',
			icon: 'news'
		},
		{
			title: 'Design & Code files',
			description:
				'Access production-ready design systems, UI kits, and code templates built for modern financial products.',
			icon: 'code'
		},
		{
			title: 'Founders & Roadmaps',
			description:
				'Follow the journeys of fintech founders. Explore product roadmaps, milestones, and strategic pivots.',
			icon: 'roadmap'
		}
	];
</script>

<section class="relative px-6 py-24 md:py-32">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 md:grid-cols-3">
			{#each features as feature}
				<div
					class="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]"
				>
					<!-- Icon -->
					<div
						class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15"
					>
						{#if feature.icon === 'news'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
								<path d="M18 14h-8" />
								<path d="M15 18h-5" />
								<path d="M10 6h8v4h-8V6Z" />
							</svg>
						{:else if feature.icon === 'code'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<polyline points="16 18 22 12 16 6" />
								<polyline points="8 6 2 12 8 18" />
								<line x1="12" y1="2" x2="12" y2="22" />
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<path d="M12 20h9" />
								<path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
								<path d="m15 5 3 3" />
							</svg>
						{/if}
					</div>

					<!-- Content -->
					<h3 class="font-heading text-lg font-semibold text-text">{feature.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-text-muted">
						{feature.description}
					</p>

					<!-- Hover glow -->
					<div
						class="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
