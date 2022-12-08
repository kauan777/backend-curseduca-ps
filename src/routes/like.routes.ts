import { Router } from "express";
import { CreateLikeController } from "../modules/likes/useCases/createLike/CreateLikeController";
import { DeleteLikeController } from "../modules/likes/useCases/deleteLike/DeleteLikeController";

const createLikeController = new CreateLikeController();
const deleteLikeController = new DeleteLikeController();

const likeRoutes = Router();

likeRoutes.post("/", createLikeController.handle);
likeRoutes.delete("/:id", deleteLikeController.handle);

export { likeRoutes };
