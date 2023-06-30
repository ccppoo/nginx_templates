/// <reference path="../node_modules/njs-types/ngx_http_js_module.d.ts" />
// import jwt, { Secret, JwtPayload } from "jsonwebtoken";

function jwt(data: string) {
  var parts = data
    .split(".")
    .slice(0, 2)
    .map((v) => Buffer.from(v, "base64url").toString())
    .map((v) => JSON.parse(v));

  return { headers: parts[0], payload: parts[1] };
}

// const SECRET_KEY: Secret = "tlqkfzz";
const SECRET_KEY: string = "tlqkfzz";

// export interface CustomRequest extends Request {
//  token: string | JwtPayload;
// }

function jwt_token_name(r: NginxHTTPRequest): string | undefined {
  const token = r.headersIn.Authorization?.slice(7);
  if (token) {
    return jwt(token).payload.name;
  }
  return;
}

function jwt_token_issued(r: NginxHTTPRequest): string | undefined {
  const token = r.headersIn.Authorization?.slice(7);
  if (token) {
    return jwt(token).payload.sub;
  }
  return;
}

// function jwt_token_expired(r: NginxHTTPRequest): string | undefined {
//   const token = r.headersIn.Authorization?.slice(7);
//   if (token) {
//     return jwt(token).payload.sub;
//   }
//   return;
// }

export default { jwt_token_name };
