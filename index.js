var server;server=function(e){var r,t,n,o,u,i,a,s;return u=require("fs"),i=require("http"),r=require("websocket").server,n=u.readFileSync(__dirname+"/client.js"),t=function(e){return e.replace("</body>","<script>"+(""+n)+"</script></body>")},server=i.createServer(function(r,n){var o;return o=function(){var u;return u=i.request({hostname:"localhost",port:e.proxy,method:r.method,path:r.url,headers:r.headers},function(e){var r,o,u;return o=e.headers["content-type"],u=null!=o&&o.indexOf("text/html")>-1,r="",e.on("data",function(e){return u?r+=e:n.write(e,"binary")}),e.on("end",function(){return u?n.end(t(r),"utf-8"):n.end()}),u?void 0:n.writeHead(e.statusCode,e.headers)}),r.on("data",function(e){return u.write(e)}),r.on("end",function(){return u.end()}),u.on("error",o)},o()}),server.listen(e.reload),s=new r({httpServer:server,autoAcceptConnections:!1}),o=[],s.on("request",function(e){var r;return r=e.accept(null,e.origin),o.push(r),r.on("close",function(){return o.splice(o.indexOf(r),1)})}),a=function(e){var r,t,n,u;for(null==e&&(e=!1),u=[],t=0,n=o.length;n>t;t++)r=o[t],u.push(r.sendUTF(e?"refresh":"reload"));return u}},module.exports=server;