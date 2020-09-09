<p align="center">
  <img alt="logo" src="src/assets/megafone.jpeg"/>
</p>

<h1 align="center">
      Denouncing API
</h1>

<h4 align="center">
  A simple denouncing api with a location system.
</h4>

<p align="center">
  <img alt="github-top-language" src="https://img.shields.io/github/languages/top/esterandr02/Denouncing-api">
  <img alt="github-repo-size" src="https://img.shields.io/github/repo-size/esterandr02/Denouncing-api?color=red">
  <img alt="github-last-commit" src="https://img.shields.io/github/last-commit/esterandr02/Denouncing-api?color=green">
  <img alt="github-repo-license" src="https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
</p>

## How works

-   Giving complaints coordinates that will find some address where you want to complain
-   Register complaints whistleblower on database

## :rocket: Technologies

-   [Typescript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/en/)
-   [Docker](https://www.docker.com/)
-   [Eslint](https://eslint.org/docs/about/)
-   [Prettier](https://prettier.io/)
-   [Express](https://expressjs.com/)
-   [Mapquest API](https://expressjs.com/) - take the free account, get a consumer key and put it on _.env.example_ file 
-   [Tsyring](https://www.npmjs.com/package/tsyringe)
-   [Postgres](https://www.postgresql.org/about/)
-   [jest](https://jestjs.io/)

## :warning: Prerequisites

-   [Git](https://git-scm.com)
-   [Node.js v12.18.1](https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz) - LTS version
-   [Yarn v1.13](https://yarnpkg.com/getting-started) - package manager
-   [Docker with postgres database](https://hub.docker.com/_/postgres) - follow the instructions to create a container that will contains the image of postgres.
-   [Account on Mapquest API](https://reactjs.org/)
-   Don't forget to put your consumer Mapquest key on _.env.example_ file

## :information_source: Getting Started

-   Install some http client to access routes or view on browser
-   Suggestion: Insomnia

```bash
# Clone this repository
$ git clone https://github.com/esterandr02/Denouncing-api.git

# Go into the repository
$ cd Denouncing-api

# Install dependences
$ yarn

# Create a Docker container
$ sudo docker run --name gostack-postgres -e POSTGRES_PASSWORD=gostack -p 5432:5432 -d postgres

# Start container - (if your machine has been powered off)
$ docker start (container name/id)

# Ckeck port - (if port 5432 has being used)
$ lsof -i :5432
$ sudo kill -9 (process that is using the port)

# Construct database tables
$ yarn typeorm migration:run

# Start the Server
$ yarn dev

# route: includes post and get methods
http://localhost:3000/v1/denuncias

Now you can use the app :D

obs: Ctrl + C to stop the server.
```
