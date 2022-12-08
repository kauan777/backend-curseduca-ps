import { Request, Response } from "express";
import { GetAllPostsUseCase } from "./GetAllPostsUseCase";

export class GetAllPostsController {
  async handle(req: Request, res: Response) {
    const getAllPostsUseCase = new GetAllPostsUseCase();

    const posts = await getAllPostsUseCase.execute();

    return res.status(200).json(posts);
  }
}
