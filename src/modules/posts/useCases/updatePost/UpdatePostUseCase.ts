import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { UpdatePostDTO } from "../../dtos/UpdatePostDTO";

interface VerifyIfExistsProps {
  id: string;
}

export class UpdatePostUseCase {
  async verifyIfExists({ id }: VerifyIfExistsProps): Promise<boolean> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return false;
    }
    return true;
  }

  async execute({ id, content }: UpdatePostDTO): Promise<Post> {
    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
    return post;
  }
}
