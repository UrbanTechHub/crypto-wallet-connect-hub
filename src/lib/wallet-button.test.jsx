import { test, expect, afterEach } from 'bun:test';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { WalletButton } from '../components/WalletButton';

afterEach(cleanup);

test('wallet buttons keep the interact-button class and stay inert', () => {
  const requests: string[] = [];
  (globalThis as Record<string, unknown>).ethereum = {
    request: async ({ method }: { method: string }) => { requests.push(method); return []; },
  };
  const { getByRole } = render(<WalletButton />);
  const button = getByRole('button', { name: /connect wallet/i });
  expect(button.className).toContain('interact-button');
  expect(button.getAttribute('aria-disabled')).toBe('true');
  fireEvent.click(button);
  expect(requests).toEqual([]);
  expect(document.querySelector('[role="dialog"]')).toBeNull();
});
