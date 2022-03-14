# Oppar
Oppar is a clone of [Flickr](https://www.flickr.com/). It is the place to share your photos of hot Korean men.

## Index
| [MVP Feature List](https://github.com/AngelShuWei/Oppar/wiki/MVP-Feature-List) | [Database Schema](https://github.com/AngelShuWei/Oppar/wiki/Database-Schema) | [Backend API Routes](https://github.com/AngelShuWei/Oppar/wiki/Backend-API-Routes) | [Frontend Routes](https://github.com/AngelShuWei/Oppar/wiki/Frontend-Routes) | 

## Technologies Used
![image](https://user-images.githubusercontent.com/92352042/158100016-56a9c514-29bb-43be-ae20-99cea44f1a4a.png)
![image](https://user-images.githubusercontent.com/92352042/158100034-225d70d4-de98-4a59-a633-812cf73ff834.png)
![image](https://user-images.githubusercontent.com/92352042/158100040-8e65d32a-ab1e-4d5d-992b-4e2f8c0f7a99.png)
![image](https://user-images.githubusercontent.com/92352042/158100048-1f5ad519-63cd-4e4c-9202-2d8e3811ca92.png)
![image](https://user-images.githubusercontent.com/92352042/158100065-143b933a-fc62-423b-b62c-69030d93ca6d.png)
![image](https://user-images.githubusercontent.com/92352042/158100071-db5e7721-3587-434c-bdbe-1ee642488e05.png)
![image](https://user-images.githubusercontent.com/92352042/158100083-d247950e-8513-4912-8220-a08651135289.png)
![image](https://user-images.githubusercontent.com/92352042/158100100-701b5273-10ab-4989-a665-1840afb7fa00.png)
![image](https://user-images.githubusercontent.com/92352042/158100106-bb07ee75-95cc-4ce3-995b-3a9c80dc8a92.png)
![image](https://user-images.githubusercontent.com/92352042/158100111-caf41119-f2a0-47b3-989c-32475bca89c9.png)
![image](https://user-images.githubusercontent.com/92352042/158100135-cdf27ef5-35db-4083-b26a-d584ac0d9021.png)
![image](https://user-images.githubusercontent.com/92352042/158100143-e3b21788-a8ab-4c70-9faa-80acee35a2b1.png)

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
