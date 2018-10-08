const Koa = require("koa");
const serverless = require("aws-serverless-koa");

const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello, world!";
});

module.exports.handler = serverless(app);
