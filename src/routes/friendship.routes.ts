import { Router } from "express";
import { AcceptFriendshipController } from "../modules/friendship/useCases/acceptFriendship/AcceptFriendshipController";
import { CreateFriendshipController } from "../modules/friendship/useCases/createFriendship/CreateFriendShipController";
import { DeleteFriendshipController } from "../modules/friendship/useCases/deleteFriendship/DeleteFriendshipController";
import { GetAllFriendsController } from "../modules/friendship/useCases/getAllFriends/GetAllFriendsController";
import { GetAllPendingsController } from "../modules/friendship/useCases/getAllPendings/GetAllPendingsController";
import { SearchUsersController } from "../modules/friendship/useCases/searchUsers/SearchUsersController";

const getAllFriendsController = new GetAllFriendsController();
const getAllPendingsController = new GetAllPendingsController();
const searchUsersController = new SearchUsersController();
const createFriendshipController = new CreateFriendshipController();
const acceptFriendshipController = new AcceptFriendshipController();
const deleteFriendshipController = new DeleteFriendshipController();

const friendshipRoutes = Router();

friendshipRoutes.get("/friends/:idUser", getAllFriendsController.handle);
friendshipRoutes.get("/pendings/:idUser", getAllPendingsController.handle);
friendshipRoutes.get("/search/:name", searchUsersController.handle);

friendshipRoutes.post("/", createFriendshipController.handle);
friendshipRoutes.patch("/:id", acceptFriendshipController.handle);
friendshipRoutes.delete("/:id", deleteFriendshipController.handle);

export { friendshipRoutes };
