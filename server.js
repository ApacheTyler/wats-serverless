const Koa = require("koa");
const KoaRouter = require("koa-route");

// some data store
const db = {
  todos: [
    {
      id: "1",
      todo: "demo sls"
    },
    {
      id: "2",
      todo: "deploy to aws"
    }
  ]
};

// todos.controller.js
const todos = {
  list: ctx => (ctx.body = db),
  get: (ctx, id) =>
    (ctx.body = db.todos.filter(todo => id === todo.id).pop() || ctx.throw(404))
};

// app.js
const app = new Koa();
app.use(KoaRouter.get("/todos", todos.list));
app.use(KoaRouter.get("/todos/:id", todos.get));

module.exports = app;
