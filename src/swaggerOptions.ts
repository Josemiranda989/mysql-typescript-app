export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Posts API",
      version: "1.0.0",
      description: "A simple API",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    },
    apis:["./src/routes/*.ts"]
};