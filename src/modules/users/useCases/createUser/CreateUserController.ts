import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      throw new AppError("Some fields are empty");
    }
    
    const imagePath = req.file?.filename || "johndoe.png";
    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      email,
      name,
      password,
      imagePath,
    });

    return res.status(201).json(result);
  }
}
