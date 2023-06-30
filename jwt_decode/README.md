# JWT Decode

```bash
yarn # install npm dependecies

tsc # compile .ts scripts

docker-compose up # start nginx containers
```

## check that works

```bash
curl --location 'http://localhost:80' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

# Hello John Doe
```

JWT Token examples could be made from [JWT debudder](https://jwt.io/)