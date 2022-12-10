import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateFriendshipDTO } from "../../dtos/UpdateFriendshipDTO";

export class AcceptFriendshipUseCase {
  async execute({ id }: UpdateFriendshipDTO) {
    const friendshipExists = await prisma.friendship.findUnique({
      where: {
        id,
      },
    });

    if (!friendshipExists) {
      throw new AppError("This friendship does not exists");
    }

    const friendship = await prisma.friendship.update({
      where: {
        id,
      },
      data: {
        status: true,
      },
    });
    return friendship;
  }
}
