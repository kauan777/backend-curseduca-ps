import { Request, Response } from "express";
import { DeleteLikeUseCase } from "./DeleteLikeUseCase";

export class DeleteLikeController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteLikeUseCase = new DeleteLikeUseCase();

    await deleteLikeUseCase.execute({
      id,
    });

    return res.status(200).send();
  }
}
