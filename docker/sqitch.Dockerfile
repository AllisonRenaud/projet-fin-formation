FROM alpine
WORKDIR /usr/src/app
COPY ../api/migrations/ ./
RUN apk update
RUN apk add sqitch -y
ENTRYPOINT [ "sqitch" ]
CMD [ "init", "ochalet", "--target", "db:pg://ochalet:ochalet@ochalet_postgres:5432/ochalet" ]