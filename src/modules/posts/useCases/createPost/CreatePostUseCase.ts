import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { CreatePostDTO } from "../../dtos/CreatePostDTO";

export class CreatePostUseCase {
  async execute({
    content,
    imagePath,
    authorId,
  }: CreatePostDTO): Promise<Post> {
    const post = await prisma.post.create({
      data: {
        content,
        authorId,
        imagePath,
      },
    });
    return post;
  }
}
