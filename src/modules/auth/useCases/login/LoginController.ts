import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Some fields are empty");
    }
    const loginUseCase = new LoginUseCase();

    const result = await loginUseCase.execute({
      email,
      password,
    });

    return res.status(200).json(result);
  }
}
