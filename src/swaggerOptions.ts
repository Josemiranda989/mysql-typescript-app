import app  from './app'

export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Posts node_mysql_ts",
      version: "1.0.0",
      description: "A simple express library API with mysql and typescript",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
    },
    apis:["./src/routes/*.ts"]
};