import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const { content } = req.body;

    const imagePath = req.file?.filename;

    const updatePostUseCase = new UpdatePostUseCase();

    const postExists = updatePostUseCase.verifyIfExists({ id });

    if (!postExists) {
      throw new AppError("Post does not exists");
    }

    const post = await updatePostUseCase.execute({
      id,
      content,
      imagePath,
    });

    return res.status(200).json(post);
  }
}
