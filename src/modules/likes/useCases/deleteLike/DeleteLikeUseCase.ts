import { prisma } from "../../../../prisma/client";

import { DeletelikeDTO } from "../../dtos/DeleteLikeDTO";

export class DeleteLikeUseCase {
  async execute({ id }: DeletelikeDTO): Promise<void> {
    await prisma.like.delete({
      where: {
        id,
      },
    });
  }
}
