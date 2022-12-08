import { prisma } from "../../../../prisma/client";
import { DeletePostDTO } from "../../dtos/DeletePostDTO";

export class DeletePostUseCase {
  async execute({ id }: DeletePostDTO): Promise<void> {
    await prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
