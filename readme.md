## basic postgreSQL-express-CRUD-api

# to create a container in Docker

- docker pull postgres
- docker run --name <name your container> -e POSTGRES_PASSWORD=<your password> -p <host port>:<container port> -d <image name >

- Example: - docker run --name postgres-db -e POSTGRES_PASSWORD=<your password> -p 5432:5432 -d postgres 

# connect to postges container
- docker exec -it postgres-db psql -U postgres