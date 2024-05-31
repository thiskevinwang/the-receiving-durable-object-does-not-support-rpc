import { DurableObject } from 'cloudflare:workers';

export class MyDurableObject extends DurableObject {
	async sayHello(name: string): Promise<string> {
		return `Hello, ${name}!`;
	}
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		let id = env.MY_DURABLE_OBJECT.newUniqueId();
		let stub = env.MY_DURABLE_OBJECT.get(id);
		let greeting = await stub.sayHello('world'); // This line throws an error.
		return new Response(greeting);
	},
};
