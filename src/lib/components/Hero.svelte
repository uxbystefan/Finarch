<script lang="ts">
	let email = $state('');
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
	<!-- Background glow effects -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute left-1/2 top-1/4 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"
		></div>
		<div
			class="absolute bottom-1/4 right-1/4 h-[300px] w-[400px] rounded-full bg-primary/3 blur-[100px]"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-3xl text-center">
		<!-- Badge -->
		<div class="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
			<span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
			<span class="font-mono text-xs text-text-muted">Building the future of fintech</span>
		</div>

		<!-- Main Heading -->
		<h1 class="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
			Welcome to
			<span class="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
				Finarch
			</span>
		</h1>

		<!-- Subheading -->
		<p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl">
			A place where fintech products are designed, discussed, and built.
		</p>

		<!-- Email CTA -->
		<form
			onsubmit={(e) => e.preventDefault()}
			class="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
		>
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				class="flex-1 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm text-text placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
			/>
			<button
				type="submit"
				class="group relative rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,150,0.25)] active:scale-[0.98]"
			>
				<span class="relative z-10">Subscribe</span>
			</button>
		</form>

		<p class="mt-4 font-mono text-xs text-text-muted/50">
			Join 2,400+ founders and builders. No spam, ever.
		</p>
	</div>
</section>
