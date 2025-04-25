
# Todo Serverless App

A simple serverless Todo application built with Node.js, PostgreSQL, and Vercel.

## Features

- Serverless architecture with Vercel
- CRUD operations for managing tasks (Create, Read, Update, Delete)
- Connected to PostgreSQL database
- Built using Express-like API structure

## Project Structure

```
/api
├── index.js         // Handles GET and POST requests for the tasks
├── [id].js          // Handles PUT and DELETE requests for a specific task by ID
├── utils
│   └── db.js        // Database connection logic
├── handlers
│   ├── getHandler.js // Handles GET requests
│   ├── postHandler.js // Handles POST requests
│   ├── updateHandler.js // Handles PUT requests (updating task status)
│   └── deleteHandler.js // Handles DELETE requests
```
## Setup

To set up and run the project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- PostgreSQL database credentials
- Vercel CLI (for deployment)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-serverless-app.git
cd todo-serverless-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment variables

Create a `.env` file in the root of your project and add your database connection string:

```env
DATABASE_URL=postgresql://retool:your-db-password@your-db-host/your-db-name?sslmode=require
```

### 4. Start the local server

Run the following command to start the development server:

```bash
vercel dev
```

You should now be able to access the API at `http://localhost:3000`.

## API Endpoints

### GET `/api`
- Retrieves a list of all tasks.
  
### POST `/api`
- Adds a new task to the database.
  
### PUT `/api/[id]`
- Updates a task's `completed` status by ID.

### DELETE `/api/[id]`
- Deletes a task by ID.

## Deployment

To deploy the app to Vercel:

1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel login` to log in to your Vercel account.
3. Run `vercel` to deploy the app.

Follow the instructions to set up the deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
