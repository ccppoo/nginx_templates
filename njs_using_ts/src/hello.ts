/// <reference path="../node_modules/njs-types/ngx_http_js_module.d.ts" />

function greatings(r: NginxHTTPRequest) {
  r.headersOut["content-type"] = "text/plain";
  r.return(200, "Hello njs typescript example");
}

export default { greatings };
