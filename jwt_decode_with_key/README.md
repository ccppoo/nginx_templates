# JWT Decode

reference : [njs-typescript-starter](https://github.com/jirutka/njs-typescript-starter)

```bash
yarn # install npm dependecies

yarn run build

docker-compose up # start nginx containers
```

## Testing

### for Windows

In Windows, **njs does not works** so you test with `Docker`

https://github.com/nginx/njs/issues/320

use docker for testing

**use docker**

```bash
# 1. start docker container
docker-compose up

# 2. run Mocha test
npm run test:docker
```

### for Not Windows

```bash
npm run test
```

You could just run test via `nginx-testing` so no need to start docker

## check that works

* with correct key

```bash
curl --location 'http://localhost:80' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.RsW4fMl-kplkQh-Y-fEMm8wNDutQtXXSOO-SGG4biJ4'

# Hello John Doe
```

* with wrong key

```bash
curl --location 'http://localhost:80' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

# not allowed
```

JWT Token examples could be made from [JWT debugger](https://jwt.io/)
