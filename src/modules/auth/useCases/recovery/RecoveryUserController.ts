import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { RecoveryUseCase } from "./RecoveryUserUseCase";

export class RecoveryUserController {
  async handle(req: Request, res: Response) {
    const { token } = req.params;

    if (!token) {
      throw new AppError("Some fields are empty");
    }
    const recoveryUseCase = new RecoveryUseCase();

    const user = await recoveryUseCase.execute({
      token
    });

    return res.status(200).json(user);
  }
}
