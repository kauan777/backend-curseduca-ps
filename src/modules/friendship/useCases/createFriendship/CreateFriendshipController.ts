import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { CreateFriendshipUseCase } from "./CreateFriendshipUseCase";

export class CreateFriendshipController {
  async handle(req: Request, res: Response) {
    const { recipientId, senderId } = req.body;

    if (!recipientId || !senderId) {
      throw new AppError("Some fields are empty");
    }

    const createFriendshipUseCase = new CreateFriendshipUseCase();

    const result = await createFriendshipUseCase.execute({
      recipientId,
      senderId,
    });

    return res.status(201).json(result);
  }
}
