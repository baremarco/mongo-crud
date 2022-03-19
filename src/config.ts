import dotenv from "dotenv";

dotenv.config();

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "aumentiodb",
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
    MONGO_HOSTNAME: process.env.MONGO_HOSTNAME || "localhost",
    MONGO_PORT: process.env.MONGO_PORT || "27017",
    SERVER_PORT: process.env.SERVER_PORT || "5000",
};
