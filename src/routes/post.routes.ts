import multer from "multer";
import path from "node:path";

import { Router } from "express";
import { CreatePostController } from "../modules/posts/useCases/createPost/CreatePostController";
import { GetAllPostsController } from "../modules/posts/useCases/getAllPosts/GetAllPostsController";
import { UpdatePostController } from "../modules/posts/useCases/updatePost/UpdatePostController";
import { DeletePostController } from "../modules/posts/useCases/deletePost/DeletePostController";

const createPostController = new CreatePostController();
const getAllPostsController = new GetAllPostsController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();

const postRoutes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads/posts"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

postRoutes.get("/", getAllPostsController.handle);

// Utilização do Path porque é uma alteração parcial
postRoutes.patch("/:id", updatePostController.handle);

postRoutes.delete("/:id", deletePostController.handle);

postRoutes.post(
  "/:authorId",
  upload.single("image"),
  createPostController.handle
);

export { postRoutes };
