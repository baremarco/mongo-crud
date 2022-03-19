import mongoose from "mongoose";
import config from "./config";

(async () => {
    try {
        const db = await mongoose.connect(
            `mongodb://${config.MONGO_HOSTNAME}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`
        );
        console.log(
            "Database is connected to",
            db.connection.name,
            "on port",
            db.connection.port
        );
    } catch (error) {
        console.error(error);
    }
})();
