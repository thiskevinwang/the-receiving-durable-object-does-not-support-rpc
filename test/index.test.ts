import { SELF, env, createExecutionContext } from 'cloudflare:test';

import { describe, it, expect } from 'vitest';

import worker from '../src/index';

declare module 'cloudflare:test' {
	interface ProvidedEnv extends Env {}
}

describe('worker', () => {
	it('should say hello (integration)', async () => {
		let response = await SELF.fetch(new Request(`https://example.com/`));
		let text = await response.text();
		expect(text).toBe('Hello, world!');
	});

	it('should say hello (unit)', async () => {
		let ctx = createExecutionContext();
		let response = await worker.fetch(new Request(`https://example.com/`), env as any, ctx);
		let text = await response.text();
		expect(text).toBe('Hello, world!');
	});
});
