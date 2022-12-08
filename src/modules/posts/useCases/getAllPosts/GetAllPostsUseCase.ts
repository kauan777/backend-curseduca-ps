import { prisma } from "../../../../prisma/client";

export class GetAllPostsUseCase {
  async execute(): Promise<{}[]> {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        content: true,
        imagePath: true,
        authorId: true,
        createdAt: true,
        author: {
          select: {
            name: true,
            imagePath: true,
          },
        },
        likes: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return posts;
  }
}
