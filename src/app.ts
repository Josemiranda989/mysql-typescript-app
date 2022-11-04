import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

// Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import {options} from "./swaggerOptions" 


// Routes
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/post.routes";

const app = express();



    
    app.settings();

    app.routes();
    const specs = swaggerJSDoc(options);
  

/*   */


    app.set("port", process.env.PORT || 3000);



    app.use(morgan("dev"));
    app.use(express.json());
    app.use(cors());



    app.use(IndexRoutes);
    app.use("/post", PostRoutes);
    app.use("/docs", swaggerUi.serve, swaggerUi);
  

app.listen(app.get('port'), () =>console.log("Server on port ", app.get('port')));

export default app;