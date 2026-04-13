<script lang="ts">
	import finarchLogo from '$lib/assets/finarch-logo.svg';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ label: 'News', href: '#news' },
		{ label: 'Design & Code', href: '/design' },
		{ label: 'Roadmaps', href: '#roadmaps' },
		{ label: 'About Us', href: '#about' },
		{ label: 'Contact', href: '#contact' }
	];

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center">
			<img src={finarchLogo} alt="Finarch" class="h-7" />
		</a>

		<!-- Desktop Nav Links -->
		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop Auth Buttons -->
		<div class="hidden items-center gap-3 md:flex">
			<a
				href="#signup"
				class="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-bg transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,200,150,0.3)]"
			>
				Sign Up
			</a>
			<a
				href="#login"
				class="rounded-xl border border-primary px-5 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/10"
			>
				Log In
			</a>
		</div>

		<!-- Mobile Hamburger -->
		<button
			onclick={toggleMenu}
			class="flex flex-col gap-1.5 md:hidden"
			aria-label="Toggle menu"
		>
			<span
				class="block h-0.5 w-6 bg-text transition-all duration-300"
				class:translate-y-2={mobileMenuOpen}
				class:rotate-45={mobileMenuOpen}
			></span>
			<span
				class="block h-0.5 w-6 bg-text transition-all duration-300"
				class:opacity-0={mobileMenuOpen}
			></span>
			<span
				class="block h-0.5 w-6 bg-text transition-all duration-300"
				class:-translate-y-2={mobileMenuOpen}
				class:-rotate-45={mobileMenuOpen}
			></span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden">
			<div class="flex flex-col gap-1 px-6 py-4">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={() => (mobileMenuOpen = false)}
						class="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors duration-200 hover:bg-surface hover:text-primary"
					>
						{link.label}
					</a>
				{/each}
				<div class="mt-4 flex flex-col gap-3 border-t border-border pt-4">
					<a
						href="#signup"
						class="rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-semibold text-bg transition-all duration-200"
					>
						Sign Up
					</a>
					<a
						href="#login"
						class="rounded-xl border border-primary px-5 py-2.5 text-center text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/10"
					>
						Log In
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
