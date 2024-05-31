# Description

To repro & observe the error:

> TypeError: The receiving Durable Object does not support RPC, because its class was not declared with `extends DurableObject`. In order to enable RPC, make sure your class extends the special class `DurableObject`, which can be imported from the module "cloudflare:workers".


do the following after cloning the repository.

```console
user@comp $ fnm use 20

user@comp $ npm i

user@comp $ npx vitest
```
