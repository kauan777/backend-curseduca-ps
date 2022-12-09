import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const { content } = req.body;

    const updatePostUseCase = new UpdatePostUseCase();

    const postExists = updatePostUseCase.verifyIfExists({ id });

    if(!content){
      throw new AppError("Some fields are empty");

    }

    if (!postExists) {
      throw new AppError("Post does not exists");
    }

    const post = await updatePostUseCase.execute({
      id,
      content,
    });

    return res.status(200).json(post);
  }
}
