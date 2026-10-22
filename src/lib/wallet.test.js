import { test, expect } from 'bun:test';
import { requestWalletAccounts, shortenAddress } from './wallet';

test('connection requests accounts only and returns the real address', async () => {
  const address = '0x1234567890123456789012345678901234567890';
  const methods = [];
  const result = await requestWalletAccounts({ request: async ({ method }) => { methods.push(method); return [address]; } });
  expect(methods).toEqual(['eth_requestAccounts']);
  expect(result).toBe(address);
  expect(shortenAddress(result)).toBe('0x1234…7890');
});

test('empty wallet accounts do not produce a simulated connection', async () => {
  await expect(requestWalletAccounts({ request: async () => [] })).rejects.toThrow('No wallet account');
});