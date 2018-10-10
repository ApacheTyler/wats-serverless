const app = require("./server");
const serverless = require("aws-serverless-koa");

module.exports.handler = serverless(app);
