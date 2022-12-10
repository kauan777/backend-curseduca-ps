import { Request, Response } from "express";
import { GetAllPendingsUseCase } from "./GetAllPendingsUseCase";

export class GetAllPendingsController {
  async handle(req: Request, res: Response) {
    const { idUser } = req.params;

    const getAllPendingsUseCase = new GetAllPendingsUseCase();

    const friendships = await getAllPendingsUseCase.execute({ idUser });

    return res.status(200).json(friendships);
  }
}
