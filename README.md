# nginx_templates

Every examples uses docker and docker-compose

## 1. Nginx njs with Typescript

[Simple njs Typescript example](./njs_using_ts//README.md)

## 2. Nginx njs decoding JWT (not validating)

[decoding JWT](./jwt_decode/README.md)

this senario could use nginx as decoding JWT

JWT could be decrypted by anyone because it's just baed on `base64 encoding`

## 3. Nginx njs decoding JWT (validating with signed key)

[decode and validating JWT](./jwt_decode_with_key/README.md)

this senario could use nginx as JWT Authentication barear by validating JWT signed key

JWT are validated by key that are signed by issuer (that should not be exposed in public)