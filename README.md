# Oppar
Oppar is a clone of [Flickr](https://www.flickr.com/). It is the place to share your photos of hot Korean men.

## Index
| [MVP Feature List](https://github.com/AngelShuWei/Oppar/wiki/MVP-Feature-List) | [Database Schema](https://github.com/AngelShuWei/Oppar/wiki/Database-Schema) | [Backend API Routes](https://github.com/AngelShuWei/Oppar/wiki/Backend-API-Routes) | [Frontend Routes](https://github.com/AngelShuWei/Oppar/wiki/Frontend-Routes) | 

## Technologies Used
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" style="width:75px;" />

## Getting Started
1. Clone this repo.
   * `git@github.com:AngelShuWei/Oppar.git`
2. Install dependencies from the root directory
   * `npm install`
3. Create a POSTGRESQL user user with CREATEDB and PASSWORD in PSQL.
   * `CREATE USER <name> WITH CREATEDB PASSWORD <'password'> CREATEDB`
4. Create a .env file in the backend directory based on the .env.example found within the respective directory.
5. Add a proxy to the package.json file in the frontend directory to match the port configuration in the .env file.
   * `"proxy": "http://localhost:5000"`
6. Create Database, Migrate, and Seed models.
   * `npx dotenv sequelize db:create`
   * `npx dotenv sequelize db:migrate`
   * `npx dotenv sequelize db:seed:all`
7. Start the services in the backend directory
   * `npm start`
8. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.
   * `npm start`
9. You can use the Demo user or create an account to begin using Oppar.
