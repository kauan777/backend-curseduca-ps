import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { friendshipRoutes } from "./friendship.routes";
import { likeRoutes } from "./like.routes";
import { postRoutes } from "./post.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/posts", postRoutes);
routes.use("/likes", likeRoutes);
routes.use("/friendships", friendshipRoutes);

export { routes };
