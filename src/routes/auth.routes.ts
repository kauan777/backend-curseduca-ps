import { Router } from "express";
import { LoginController } from "../modules/auth/useCases/login/LoginController";
import { RecoveryUserController } from "../modules/auth/useCases/recovery/RecoveryUserController";

const loginController = new LoginController();
const recoveryUserController = new RecoveryUserController();

const authRoutes = Router();

authRoutes.post("/", loginController.handle);
authRoutes.get("/recovery/:token", recoveryUserController.handle);

export { authRoutes };
