<p align="center">
  <img src="/img.shields.io/image/node_logo.svg" width="200" alt="Node Logo" /></a>
</p>

<p align="center">
    <em>Developed with the software and tools below.</em>
</p>
<p align="center">
    <img src="/img.shields.io/badge/node.svg?style=flat&logo=node&logoColor=white" alt="node">
    <img src="/img.shields.io/badge/TypeScript-blue.svg?style=flat&logo=TypeScript-blue&logoColor=white" alt="TypeScript-blue">
    <img src="/img.shields.io/badge/fastify.svg?style=flat&logo=fastify&logoColor=white" alt="fastify">
    <img src="/img.shields.io/badge/zod.svg?style=flat&logo=zod&logoColor=white" alt="zod">
    <br>
    <img src="/img.shields.io/badge/docker.svg?style=flat&logo=docker&logoColor=white" alt="docker">
    <img src="/img.shields.io/badge/postgreSQL.svg?style=flat&logo=postgreSQL&logoColor=white" alt="postgreSQL">
    <img src="/img.shields.io/badge/redis.svg?style=flat&logo=redis&logoColor=white" alt="redis">
    <img src="/img.shields.io/badge/swagger.svg?style=flat&logo=swagger&logoColor=white" alt="swagger">
</p>

### ⚙️ Requirements to run the API

- Docker
- An OpenAI account if you want to use the route with artificial intelligence

### ⚙️ Installation

> 1. Clone the repository:
>
> ```console
> $ git clone https://github.com/diego64/devstage/api
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd devstage/api
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```
> 4. Install the database:
> ```console
> $ docker compose up -d
> $ docker container ls
> ```
> 4. Generate the migrate:
> ```console
> $ npx drizzlet-kit migrate
> ```
> 5. Start the application:
> ```console
> $ npm run start:dev
> ```

---

## 📄 License

This project is protected by the MIT License.

---