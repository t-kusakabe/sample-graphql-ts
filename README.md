# sample-graphql

## Usage

*DB Connect*
Username: admin | Password: admin

```
# pgcli
pgcli -u admin -h 127.0.0.1

# prisma studio
docker compose exec node npx prisma studio
```

*Migration*

```
docker compose exec node npx prisma migrate dev --name init
```

*Seed*

```
docker compose exec node npx prisma db seed
```
