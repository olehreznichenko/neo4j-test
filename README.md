# Simple trpc server with neo4j database

## Prerequisites

To run this project, ensure you have the following installed on your machine:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Bun**: [Install Bun](https://bun.sh)

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone git@github.com:olehreznichenko/neo4j-test.git
   cd neo4j-test
   ```

2. **Copy and configure environment variables**:

   - Copy the `.env.example` file and rename it to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file and insert the required values.

3. **Install dependencies**:
   ```bash
   bun install
   ```

## Available Scripts

- **Insert initial data into the database** (one-off command):

  ```bash
  bun tasks/insert-initial-data.ts
  ```

- **Run the development environment with Docker**:

  ```bash
  bun run docker:dev
  ```

- **Run the development server**:
  ```bash
  bun run dev
  ```

## Folder Structure

- **`queries/`**: Contains Cypher queries for interacting with the Neo4j database.
- **`tasks/`**: Contains scripts for one-off or scheduled tasks.
- **`server/main.ts`**: The entry point of the server.
- **`server/controllers/`**: Contains tRPC routes.
- **`server/services/`**: Contains service layers for business logic.
- **`server/db.ts`**: Handles database initialization and helper functions.

## Notes

- At the end of the `main.ts` file, you'll find commented route calls. To see the results of these routes, simply uncomment them.
