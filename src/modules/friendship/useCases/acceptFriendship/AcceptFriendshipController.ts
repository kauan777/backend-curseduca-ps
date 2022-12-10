import { Request, Response } from "express";
import { AcceptFriendshipUseCase } from "./AcceptFriendshipUseCase";

export class AcceptFriendshipController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const acceptFriendshipUseCase = new AcceptFriendshipUseCase();

    const friendship = await acceptFriendshipUseCase.execute({
      id,
    });

    return res.status(200).json(friendship);
  }
}
