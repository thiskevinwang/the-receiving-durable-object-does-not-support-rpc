# Description

To repro & observe the error:

> TypeError: The receiving Durable Object does not support RPC, because its class was not declared with `extends DurableObject`. In order to enable RPC, make sure your class extends the special class `DurableObject`, which can be imported from the module "cloudflare:workers". [^1]

[^1]: The error source is in `workerd`: https://github.com/cloudflare/workerd/blob/0db41cce5ba1df42c95614972c70dca83e0a04b0/src/workerd/api/worker-rpc.c%2B%2B#L1583-L1591


do the following after cloning the repository.

```console
user@comp $ fnm use 20

user@comp $ npm i

user@comp $ npx vitest
```
