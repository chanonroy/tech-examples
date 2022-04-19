const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const port = 3000;

const router = new Router();

router.get("/", (ctx, next) => {
  // ctx.router available
  console.log("hello home");
});

router.get("/about", (ctx, next) => {
  // ctx.router available
  console.log("hello about");
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
console.log(`Example app listening on port ${port}`);
