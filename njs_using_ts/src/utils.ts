/// <reference path="../node_modules/njs-types/ngx_http_js_module.d.ts" />

function version(r: NginxHTTPRequest) {
  r.return(200, njs.version);
}

export default { version };
