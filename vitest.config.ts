import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineWorkersConfig({
	plugins: [tsconfigPaths()],
	test: {
		poolOptions: {
			workers: {
				// https://developers.cloudflare.com/workers/testing/vitest-integration/isolation-and-concurrency/#isolation-and-concurrency-models
				singleWorker: true,
				isolatedStorage: false,
				wrangler: { configPath: './wrangler.toml' },
			},
		},
	},
});
