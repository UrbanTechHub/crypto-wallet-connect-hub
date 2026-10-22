export interface WalletProvider {
  request(args: { method: string }): Promise<unknown>;
}

export function getWalletProvider(): WalletProvider | undefined {
  const provider = (window as Window & { ethereum?: WalletProvider }).ethereum;
  return provider;
}

export async function requestWalletAccounts(provider: WalletProvider): Promise<string> {
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  if (!Array.isArray(accounts) || typeof accounts[0] !== 'string' || !/^0x[a-fA-F0-9]{40}$/.test(accounts[0])) {
    throw new Error('No wallet account was returned. Please unlock your wallet and try again.');
  }
  return accounts[0];
}

export function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}