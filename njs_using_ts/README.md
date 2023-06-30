# Simple njs with typescript

```bash
yarn # install npm dependecies

tsc # compile .ts scripts

docker-compose up # start nginx containers
```

check that works

```bash
curl --location 'http://localhost' # Hello njs typescript example

curl --location 'http://localhost:80/version' # 0.7.12 (could differ by your nginx container version)
```

## /dist

output folder of TS script compiled to JS

you could change to other folders modifying `tsconfig.json`

```json
{
    "compilerOptions": {
        // ...
        "outDir": "./dist"
    }
}
```
