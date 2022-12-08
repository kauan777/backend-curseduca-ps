import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { CreateLikeUseCase } from "./CreateLikeUseCase";

export class CreateLikeController {
  async handle(req: Request, res: Response) {
    const { authorId, postId } = req.body;

    if (!authorId || !postId) {
      throw new AppError("Some fields are empty");
    }

    const createLikeUseCase = new CreateLikeUseCase();

    const result = await createLikeUseCase.execute({
      authorId,
      postId,
    });

    return res.status(201).json(result);
  }
}
