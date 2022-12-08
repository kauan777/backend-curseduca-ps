import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const { authorId } = req.params;

    const { content } = req.body;

    if (!content) {
      throw new AppError("Some fields are empty");
    }

    const imagePath = req.file?.filename || "";

    const createPostUseCase = new CreatePostUseCase();

    const post = await createPostUseCase.execute({
      authorId,
      content,
      imagePath,
    });

    return res.status(201).json(post);
  }
}
