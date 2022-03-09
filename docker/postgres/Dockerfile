FROM postgres:14.2-alpine3.15

ENV LANG ja_JP.utf8

COPY ./docker/postgres/init/init.sql /docker-entrypoint-initdb.d/init.sql
