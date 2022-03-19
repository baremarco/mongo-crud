import { RequestHandler } from "express";
import Post from "../models/post.model";

export const getPosts: RequestHandler = (req, res) => {
    Post.find({}, (err: any, result: any) => {
        if (err) {
            res.status(400).send({
                success: false,
                error: err.message,
            });
        }
        res.status(200).send({
            success: true,
            data: result,
        });
    });
};

export const getPost: RequestHandler = (req, res) => {
    const postId = req.params.id;
    Post.findById(postId, (err: any, result: any) => {
        if (err) {
            res.status(400).send({
                success: false,
                error: err.message,
            });
        }
        res.status(200).send({
            success: true,
            data: result,
        });
    });
};

export const createPost: RequestHandler = async (req, res) => {
    const newPost = new Post(req.body);

    Post.create(newPost, (err: any, result: any) => {
        if (err) {
            res.status(400).send({
                success: false,
                error: err.message,
            });
        }
        res.status(201).send({
            success: true,
            data: result,
            message: "Post created",
        });
    });
};

export const updatePost: RequestHandler = (req, res) => {
    const fieldsToUpdate = req.body;
    const postId = req.params.id;
    Post.findByIdAndUpdate(
        postId,
        { $set: fieldsToUpdate },
        { new: true },
        (err: any, result: any) => {
            if (err) {
                res.status(400).send({
                    success: false,
                    error: err.message,
                });
            }
            res.status(200).send({
                success: true,
                data: result,
                message: "Post Updated",
            });
        }
    );
};

export const deletePost: RequestHandler = (req, res) => {
    const postId = req.params.id;
    Post.findByIdAndDelete(postId, (err: any, result: any) => {
        if (err) {
            res.status(400).send({
                success: false,
                error: err.message,
            });
        }
        res.status(200).send({
            success: true,
            data: result,
            message: "Post deleted",
        });
    });
};
