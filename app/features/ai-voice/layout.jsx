import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai-voice',
  title: 'AI Voice Agent for Sales — Inbound & Outbound Calls | WellPlan',
  description: 'AI phone agents that handle inbound and outbound calls with natural voice conversations. Qualify leads, book appointments, and provide support 24/7.',
});

export default function AIVoiceLayout({ children }) {
  return children;
}
