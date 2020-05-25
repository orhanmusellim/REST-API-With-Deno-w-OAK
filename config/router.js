import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Simple REST API With Deno w/Oak";
});

router.get("/simple", ({ response }) => {
  response.body = "Simple Page REST API With Deno w/Oak";
});

export default router;
