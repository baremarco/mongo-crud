import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        text: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        tag: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default model("Post", postSchema);
