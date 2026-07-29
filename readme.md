# PostgreSQL Express CRUD API

A simple REST API built with Node.js, Express, and PostgreSQL for creating, reading, updating, and deleting user records.

## Features

- Express server with JSON request handling
- PostgreSQL connection through `pg`
- CRUD endpoints for users
- Input validation middleware
- Automatic users table creation on startup

## Tech Stack

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- cors
- joi

## Project Structure

- `backend/src/server.js` - app entry point
- `backend/src/config/db.js` - PostgreSQL pool configuration
- `backend/src/controllers` - request handlers
- `backend/src/models` - database queries
- `backend/src/routes` - API routes
- `backend/src/db/createUserTable.js` - creates the users table
- `backend/src/middlewares` - validation and error handling

## Prerequisites

- Node.js installed
- PostgreSQL installed locally or available in Docker
- A database created for this project

## Environment Variables

Create a `.env` file inside the `backend` folder with the values expected by the app:

```env
PORT=5001
USER=postgres
HOST=localhost
DATABASE=your_database_name
PASSWORD=your_password
DBPORT=5432
```

## Installation

```bash
cd backend
npm install
```

## Run the API

Development mode:

```bash
npm run dev
```

The server runs on the port defined in `PORT`, or `5001` if `PORT` is not set.

## API Endpoints

All routes are mounted under `/api`.

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/alluser` | Get all users |
| GET | `/api/user/:id` | Get a user by ID |
| POST | `/api/createuser` | Create a new user |
| PUT | `/api/updateuser/:id` | Update a user by ID |
| DELETE | `/api/deleteuser/:id` | Delete a user by ID |

### Example Request Body

```json
{
	"name": "star butterfly",
	"email": "star@example.com"
}
```

## Docker

### To create a container in Docker

- `docker pull postgres`
- `docker run --name <name your container> -e POSTGRES_PASSWORD=<your password> -p <host port>:<container port> -d <image name>`

Example:

```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=<your password> -p 5432:5432 -d postgres
```

### Connect to the Postgres container

```bash
docker exec -it postgres-db psql -U postgres
```

## Notes

- The app creates the `users` table automatically when the server starts.
- If you change the database name or credentials, update the `.env` file.
- Make sure the Postgres container or local database is running before starting the API.