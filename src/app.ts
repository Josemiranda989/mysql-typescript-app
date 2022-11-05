import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
require("dotenv").config();

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

const app: Application = express();

// Routes
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/post.routes";

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const specs = swaggerJSDoc(options);

app.use(IndexRoutes);
app.use("/post", PostRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(app.get("port"), () =>
  console.log(`Server on port http://localhost:${app.get("port")}`)
);

export default app;
