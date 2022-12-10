import { Friendship } from "@prisma/client";
import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateFriendshipDTO } from "../../dtos/CreateFriendshipDTO";

export class CreateFriendshipUseCase {
  async execute({
    recipientId,
    senderId
  }: CreateFriendshipDTO): Promise<Friendship> {

    const sender = await prisma.user.findUnique({
      where: {
        id: senderId
      }
    })
    const recipient = await prisma.user.findUnique({
      where: {
        id: recipientId
      }
    })

    const ifFriends = await prisma.friendship.findFirst({
      where: {
        OR: [
          {
            AND: {
              senderId: senderId,
              recipientId: recipientId,
            },
          },
          {
            AND: {
              senderId: recipientId,
              recipientId: senderId,
            },
          }
        ],
      }
    })

    if (ifFriends) {
      throw new AppError("You are friends");
    }

    if (!sender || !recipient) {
      throw new AppError("Some users does not exists");
    }


    const friendship = await prisma.friendship.create({
      data: {
        recipientId,
        senderId
      },
    });
    return friendship;
  }
}
