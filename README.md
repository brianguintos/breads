# Breads — Full-Stack CRUD App

A full-stack web application for cataloging breads and their bakers, built with **Node.js, Express, and MongoDB (Mongoose)**, with server-rendered React (JSX) views.

Built during the Software Development Bootcamp at UNLV.

## Features

- Full CRUD: create, view, edit, and delete bread entries
- Mongoose schema with validation (required fields, enumerated baker values) and custom instance/static model methods
- RESTful routing with an MVC structure (models / controllers / views)
- Server-side rendering with `express-react-views`
- Form method override for PUT/DELETE, request logging, and seed data for demo content

## Tech stack

- Node.js · Express
- MongoDB · Mongoose
- React (server-rendered JSX views via express-react-views)
- dotenv · method-override · morgan

## Run it locally

```bash
git clone https://github.com/brianguintos/breads.git
cd breads
npm install
```

Create a `.env` file with your MongoDB connection string and port:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Seed the database (optional) and start the server:

```bash
node seeds.js
npm start
```

Then open http://localhost:3000
