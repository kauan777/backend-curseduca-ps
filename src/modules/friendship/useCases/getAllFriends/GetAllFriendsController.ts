import { Request, Response } from "express";
import { GetAllFriendsUseCase } from "./GetAllFriendsUseCase";

export class GetAllFriendsController {
  async handle(req: Request, res: Response) {
    const { idUser } = req.params;

    const getAllFriendsUseCase = new GetAllFriendsUseCase();

    const friendships = await getAllFriendsUseCase.execute({ idUser });

    return res.status(200).json(friendships);
  }
}
