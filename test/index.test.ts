import { SELF, env, createExecutionContext } from 'cloudflare:test';

import { describe, it, expect } from 'vitest';

import worker from '../src/index';

describe('worker', () => {
	it('should say hello (integration)', async () => {
		let hex64 = '24AC89575C1B4836807C73FB46074024518FFCA6047779EADA9F329C5CC17B60';
		let response = await SELF.fetch(new Request(`https://example.com/${hex64}`));
		let text = await response.text();
		expect(text).toBe('Hello, world!');
	});

	it('should say hello (unit)', async () => {
		let hex64 = '24AC89575C1B4836807C73FB46074024518FFCA6047779EADA9F329C5CC17B60';
		let ctx = createExecutionContext();
		let response = await worker.fetch(new Request(`https://example.com/${hex64}`), env as any, ctx);
		let text = await response.text();
		expect(text).toBe('Hello, world!');
	});
});
