import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deletePostUseCase = new DeletePostUseCase();

    const post = await deletePostUseCase.execute({
      id,
    });

    return res.status(200).json(post);
  }
}
