import { Application } from "https://deno.land/x/oak/mod.ts";
import config from "./denuxt.config.js";
import router from "./config/router.js";
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: config.PORT });
