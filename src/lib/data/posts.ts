export type PostCategory = 'KYC' | 'Payments' | 'Trading' | 'Banking' | 'Cards' | 'Crypto';
export type PostType = 'Component' | 'Code' | 'Insight';

export interface Post {
	id: string;
	title: string;
	category: PostCategory;
	type: PostType;
	description: string;
	insight: string;
	upvotes: number;
	comments: number;
	codePreview?: string;
	date: string;
}

export const categories: PostCategory[] = ['KYC', 'Payments', 'Trading', 'Banking', 'Cards', 'Crypto'];
export const types: PostType[] = ['Component', 'Code', 'Insight'];

export const posts: Post[] = [
	{
		id: '1',
		title: 'KYC Verification Flow with Document Scanner',
		category: 'KYC',
		type: 'Component',
		description:
			'A multi-step identity verification component with real-time document scanning, liveness detection, and progressive disclosure. Built for compliance-first onboarding.',
		insight:
			'We split the flow into micro-steps to reduce drop-off. Each step validates independently so users never lose progress on network failure.',
		upvotes: 142,
		comments: 23,
		date: '2026-04-10'
	},
	{
		id: '2',
		title: 'Stripe-style Payment Intent Handler',
		category: 'Payments',
		type: 'Code',
		description:
			'Server-side payment intent creation with idempotency keys, retry logic, and webhook reconciliation. TypeScript implementation with Zod validation.',
		insight:
			'Idempotency keys are generated client-side using a hash of amount + currency + user session — prevents duplicate charges even on aggressive retries.',
		upvotes: 238,
		comments: 41,
		codePreview: `async function createPaymentIntent(
  amount: number,
  currency: string,
  metadata: Record<string, string>
) {
  const idempotencyKey = generateKey(amount, currency);
  return await stripe.paymentIntents.create(
    { amount, currency, metadata },
    { idempotencyKey }
  );
}`,
		date: '2026-04-09'
	},
	{
		id: '3',
		title: 'Real-time Order Book Visualization',
		category: 'Trading',
		type: 'Component',
		description:
			'WebSocket-driven order book with depth chart, bid/ask spread indicator, and configurable precision levels. Renders 60fps with virtualized rows.',
		insight:
			'We batch WebSocket updates into 100ms frames and diff against the current state — this prevents unnecessary re-renders on volatile pairs.',
		upvotes: 187,
		comments: 35,
		date: '2026-04-08'
	},
	{
		id: '4',
		title: 'Account Balance Dashboard with Sparklines',
		category: 'Banking',
		type: 'Component',
		description:
			'Multi-account balance overview with inline sparkline charts, currency formatting, and responsive card grid. Supports 15+ currencies with proper locale formatting.',
		insight:
			'Sparklines are rendered as SVG paths computed from the last 30 data points — no charting library needed, keeping the bundle under 2KB for this component.',
		upvotes: 96,
		comments: 12,
		date: '2026-04-07'
	},
	{
		id: '5',
		title: 'Virtual Card Provisioning API',
		category: 'Cards',
		type: 'Code',
		description:
			'End-to-end virtual card issuance flow with PCI-compliant token handling, spending controls, and real-time transaction webhooks.',
		insight:
			'Card numbers are never stored in our database — we use tokenized references and decrypt only in a PCI-scoped microservice at render time.',
		upvotes: 204,
		comments: 28,
		codePreview: `interface CardConfig {
  type: 'virtual' | 'physical';
  spendLimit: number;
  currency: string;
  controls: SpendingControls;
}

const card = await issuer.provision({
  ...config,
  tokenize: true,
  webhookUrl: '/api/cards/events'
});`,
		date: '2026-04-06'
	},
	{
		id: '6',
		title: 'Why DeFi Wallets Need Progressive Security',
		category: 'Crypto',
		type: 'Insight',
		description:
			'An analysis of seed phrase UX failures and how progressive security — starting with social recovery and escalating to hardware keys — reduces abandonment by 60%.',
		insight:
			'Most users abandon wallets at the "write down your seed phrase" step. Progressive security lets them start simple and add layers as their balance grows.',
		upvotes: 312,
		comments: 67,
		date: '2026-04-05'
	},
	{
		id: '7',
		title: 'PSD2 Strong Customer Authentication Modal',
		category: 'Payments',
		type: 'Component',
		description:
			'A compliant SCA challenge modal supporting biometric, OTP, and app-based authentication. Handles 3DS2 redirects gracefully with loading states.',
		insight:
			'The modal pre-fetches the challenge URL while showing the confirmation screen — users perceive zero latency on the redirect.',
		upvotes: 118,
		comments: 19,
		date: '2026-04-04'
	},
	{
		id: '8',
		title: 'Risk Scoring Engine with Explainable Output',
		category: 'KYC',
		type: 'Code',
		description:
			'A rule-based risk scoring module that outputs a score plus human-readable explanations for each factor. Designed for compliance audit trails.',
		insight:
			'Regulators require explainability — so every score includes a breakdown like "Address mismatch: +15 points" that compliance officers can review.',
		upvotes: 156,
		comments: 22,
		codePreview: `function scoreRisk(profile: UserProfile): RiskResult {
  const factors: RiskFactor[] = [];
  let score = 0;

  if (!profile.addressVerified) {
    score += 15;
    factors.push({ rule: 'address_mismatch', weight: 15 });
  }

  return { score, level: classify(score), factors };
}`,
		date: '2026-04-03'
	}
];
