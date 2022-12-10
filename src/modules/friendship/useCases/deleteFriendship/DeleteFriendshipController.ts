import { Request, Response } from "express";
import { DeleteFriendshipUseCase } from "./DeleteFriendshipUseCase";

export class DeleteFriendshipController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteFriendshipUseCase = new DeleteFriendshipUseCase();

    await deleteFriendshipUseCase.execute({
      id,
    });

    return res.status(200).send();
  }
}
