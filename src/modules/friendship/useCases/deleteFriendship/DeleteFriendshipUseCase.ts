import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteFriendshipDTO } from "../../dtos/DeleteFriendshipDTO";

export class DeleteFriendshipUseCase {
  async execute({ id }: DeleteFriendshipDTO) {
    const friendshipExists = await prisma.friendship.findUnique({
      where: {
        id,
      },
    });

    if (!friendshipExists) {
      throw new AppError("This friendship does not exists");
    }

    await prisma.friendship.delete({
      where: {
        id,
      },
    });
  }
}
