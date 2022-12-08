import { Like } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { CreatelikeDTO } from "../../dtos/CreateLikeDTO";

export class CreateLikeUseCase {
  async execute({ authorId, postId }: CreatelikeDTO): Promise<Like> {
    const like = await prisma.like.create({
      data: {
        authorId,
        postId,
      },
    });
    return like;
  }
}
