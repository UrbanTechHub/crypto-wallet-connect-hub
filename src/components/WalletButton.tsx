import { ArrowUpRight, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Presentation only. Never reads a provider or attaches wallet handlers. */
export function WalletButton({ compact = false }: { compact?: boolean }) {
  return <Button type="button" className={`interact-button ${compact ? 'header-wallet' : ''}`} aria-disabled="true"><Wallet />Connect wallet{!compact && <ArrowUpRight />}</Button>;
}