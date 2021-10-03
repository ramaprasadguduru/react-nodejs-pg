//const  createProxyMiddleware  = require('http-proxy-middleware');
//const url = process.env.CONTAINER_NAME
//module.exports = function(app) {
  //app.use(
    //createProxyMiddleware({
      //target: url,
      //changeOrigin: true,
    //})
  //);
//};

const url = process.env.CONTAINER_NAME;

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  
  app.use(proxy('/api/customer', { target: url }))

}
