import { prisma } from "../../../../prisma/client";
import { GetAllPendings } from "../../dtos/GetAllPendings";

export class GetAllPendingsUseCase {
  async execute({ idUser }: GetAllPendings) {
    const friendships = await prisma.friendship.findMany({
      where: {
        status: false,
        recipientId: idUser,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            imagePath: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return friendships;
  }
}
