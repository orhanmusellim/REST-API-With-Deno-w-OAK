import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

import HomeController from "../controller/Home.js";
router.get("/", HomeController.index);

export default router;
