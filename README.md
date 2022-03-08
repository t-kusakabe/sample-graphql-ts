# sample-graphql

## Usage

*DB Connect*
Username: admin | Password: admin

```
pgcli -u admin -h 127.0.0.1
```

*Migration*

```
docker compose exec node npx prisma migrate dev --name init
```
