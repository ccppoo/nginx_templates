/// <reference path="../node_modules/njs-types/ngx_http_js_module.d.ts" />
import { decode } from "jwt-simple";

const secret = "tlqkfzz";

export function is_valid_token(r: NginxHTTPRequest): number {
  const token = r.headersIn.Authorization?.slice(7);

  if (!token) {
    return 0;
  }
  try {
    decode(token, secret);
    return 1;
  } catch (err) {
    return 0;
  }
}
