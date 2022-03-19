import express from "express";
import config from "./config";
import postRoutes from "./routes/post.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.set("port", config.SERVER_PORT);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(postRoutes);

export default app;
