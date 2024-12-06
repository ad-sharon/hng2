// to solve cors error
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.timbu.cloud",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader("Access-Control-Allow-Origin", "*");
      },
    })
  );
};
