import { DurableObject } from 'cloudflare:workers';

interface Env {
	MY_DURABLE_OBJECT: DurableObjectNamespace<MyDurableObject>;
}

export class MyDurableObject extends DurableObject {
	async sayHello(name: string): Promise<string> {
		return `Hello, ${name}!`;
	}
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		// There are two errors here:

		// 1. TypeError: Durable Object ID is not valid for this namespace.
		// ----------------------------------------
		let idString = new URL(request.url).pathname.replace(/^\//, '');
		let id: DurableObjectId = env.MY_DURABLE_OBJECT.idFromString(idString); // This line throws an error.
		let stub = env.MY_DURABLE_OBJECT.get(id);
		let greeting = await stub.sayHello('world');
		return new Response(greeting);

		// 2. TypeError: The receiving Durable Object does not support RPC,
		// because its class was not declared with `extends DurableObject`.
		// In order to enable RPC, make sure your class extends the special class
		// `DurableObject`, which can be imported from the module "cloudflare:workers".
		// ----------------------------------------
		// let id = env.MY_DURABLE_OBJECT.newUniqueId();
		// let stub = env.MY_DURABLE_OBJECT.get(id);
		// let greeting = await stub.sayHello('world'); // This line throws an error.
		// return new Response(greeting);
	},
};
