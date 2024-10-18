# CRUD Operations with Prisma, PostgreSQL, and Express

## Prerequisites

- Node.js
- Docker
- PostgreSQL (running on port 5432)

## Getting Started

### 1. Clone the Repository

    ```bash
    git clone https://github.com/sandeeepgithub/prisma-postgres-express.git
    cd crud-express-nodejs
    ```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up PostgreSQL with Docker

1. **Pull the PostgreSQL Docker Image:**

   ```bash
   docker pull postgres
   ```

2. **Run PostgreSQL Container:**

   Replace `your_password` with a strong password of your choice.

   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=your_password -d -p 5432:5432 postgres
   ```

3. **Verify PostgreSQL is Running:**

   You can check if the PostgreSQL container is running with:

   ```bash
   docker ps
   ```

### 4. Configure Prisma

1. **Set Up `.env` File:**

   Create a `.env` file in the root of your project and add:

   ```env
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/postgres"
   ```

   Replace `your_password` with the password you set in the Docker command.

2. **Initialize Prisma:**

   ```bash
   npx prisma init
   ```

3. **Define Your Data Model:**

   Edit `prisma/schema.prisma` to define your models.

4. **Run Migrations:**

   ```bash
   npx prisma migrate dev --name init
   ```

### 5. Set Up Express Server

1. **Change `index.js` File:**
   - Set up your changes in Express server to handle CRUD operations using Prisma.

### 6. Start the Application

Run your Express server:

```bash
npm run dev
```

### 7. Testing the API

Use tools like Postman or curl to test your API endpoints.

### 8. Postman Collection

A Postman collection is included in the project to help you test the API easily. You can find it in the root directory as Postman_collection.json.

## Conclusion

You now have a basic CRUD application set up with Prisma, PostgreSQL, and Express. Feel free to expand on this by adding more features or improving the data models!

## License

This project is licensed under the MIT License.
