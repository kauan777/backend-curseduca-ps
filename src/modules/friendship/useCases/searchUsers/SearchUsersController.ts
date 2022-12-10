import { Request, Response } from "express";
import { SearchUsersUseCase } from "./SearchUsersUseCase";

export class SearchUsersController {
  async handle(req: Request, res: Response) {
    const { name } = req.params;


    const searchUsersUseCase = new SearchUsersUseCase();

    const users = await searchUsersUseCase.execute({ name });

    return res.status(200).json(users);
  }
}
