Create User
    psql: CREATE USER movie_app WITH CREATEDB PASSWORD 'password';

Create DB:
    terminal: npx dotenv sequelize db:create

Create Genre Model
    terminal: npx sequelize model:generate --name Genre --attributes name:string

Update migration file and model file
    -constraints and associations on genre model

Run migration on genre model
    - npx dotenv sequelize db:migrate
Create seeder for genre model
    - npx sequelize seed:generate --name genreSeeds

Create User model
    terminal: npx sequelize model:generate --name User --attributes email:string,username:string,hashedPassword:string

Update migration file and model file
    -constraints and associations on user model

Run migration
    - npx dotenv sequelize db:migrate

Create seeder for user model
    - npx sequelize seed:generate --name userSeeds
    - demo user
    - npx dotenv db:seed:all

Create Movies Model
    terminal: npx sequelize model:generate --name Movie --attributes title:string,plot:string,imageLink:string,director:string,movieRating:string,year:integer,duration:string,genreId:integer

Update migration and model files
    - constraints and associations

Run migration
    -npx dotenv sequelize db:migrate

Create seed for movie model
    - npx  sequelize seed:generate --name movieSeeds
    - add seed data
    - npx dotenv db:seed:all

Create myList model
    - npx sequelize model:generate --name MyList --attributes userId:integer,name:string

Update migration and model files
    - constraints and associations

Run migration
    - npx dotenv sequelize db:migrate

Create seed for myList model
    - npx sequelize seed:generate --name myListSeeds
    - add seed data
    - npx dotenv db:seed:all

Create movieList model
    - npx sequelize model:generate --name MovieList --attributes movieId:integer,myListId:string

Update migration and model files
    - constraints and associations

Run migration
    - npx dotenv sequelize db:migrate

Create seed for myList model
    - npx sequelize seed:generate --name movieListSeeds
    - add seed data
    - npx dotenv db:seed:all

Create reviews model
    - npx sequelize model:generate --name Review --attributes title:string,content:string,movieId:integer,userId:integer

Update migration and model files
    - constraints and associations

Run migration
    - npx dotenv sequelize db:migrate

Create seed for reviews model
    - npx sequelize seed:generate --name reviewSeeds
    - add seed data
    - npx dotenv db:seed:all


Create ratings model
    - npx sequelize model:generate --name Rating --attributes rating:integer,movieId:integer,userId:integer

Update migration and model files
    - constraints and associations

Run migration
    - npx dotenv sequelize db:migrate

Create seed for ratings model
    - npx sequelize seed:generate --name ratingSeeds
    - add seed data
    - npx dotenv sequelize db:seed:all
