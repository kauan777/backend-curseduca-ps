import { prisma } from "../../../../prisma/client";
import { GetAllFriendsDTO } from "../../dtos/GetAllFriendsDTO";

export class GetAllFriendsUseCase {
  async execute({ idUser }: GetAllFriendsDTO) {
    const data = await prisma.friendship.findMany({
      where: {
        OR: [
          {
            senderId: idUser,
          },
          {
            recipientId: idUser,
          },
        ],
        AND: { status: true },
      },
      include: {
        recipient: {
          select: {
            id: true,
            name: true,
            imagePath: true,
          },
        },
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

    // Como eu não sei o usuário é quem recebeu ou quem mandou, eu retorno todos que não forem igual ao id do usuário

    const senderFriends = data
      .filter((item) => item.sender.id !== idUser)
      .map((item) => ({
        id: item.id,
        senderId: item.senderId,
        recipientId: item.recipientId,
        friend: item.sender,
      }));

    const recipientFriends = data
      .filter((item) => item.recipient.id !== idUser)
      .map((item) => ({
        id: item.id,
        senderId: item.senderId,
        recipientId: item.recipientId,
        friend: item.recipient,
      }));
    const friendshipsFiltered = senderFriends.concat(recipientFriends);

    return friendshipsFiltered;
  }
}
