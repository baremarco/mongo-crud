import { Router } from "express";
import * as postsController from "./posts.controller";

const router = Router();

router.get("/posts", postsController.getPosts);

router.get("/post/:id", postsController.getPost);

router.post("/posts", postsController.createPost);

router.put("/posts/:id", postsController.updatePost);

router.delete("/posts/:id", postsController.deletePost);

export default router;
