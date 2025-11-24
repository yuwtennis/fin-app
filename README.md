# fin-app

This repository is intended for practising [financial app for Next.js](https://nextjs.org/learn/dashboard-app/getting-started).

## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Pre requisites

- Requires [postgres](https://www.postgresql.org/). The repository bootstraps the database with docker compose.
- Requires [npm](https://www.npmjs.com/). The repository is tested on `nodejs 24.10.0` .

## Getting started

I have used [asdf](https://asdf-vm.com/) to manage the required tools.  Just ignore it if you have your own tools.

### Start docker

```shell
docker compose up -d
```

### Bootstrap packages

```shell
asdf exec npm i
```

### Run dev server

```shell
asdf exec npm run dev
```

### Init database

Open your browser and access to the seed endpoint.

http://localhost:3000/seed

### Open the login page

Login to the page

http://localhost:3000/login

```markdown
email: next@nextmail.com
password: 123456
```
