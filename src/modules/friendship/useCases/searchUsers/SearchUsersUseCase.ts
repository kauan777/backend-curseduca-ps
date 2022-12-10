import { prisma } from "../../../../prisma/client";
import { SearchUsersDTO } from "../../dtos/SearchUsersDTO";

export class SearchUsersUseCase {
  async execute({ name }: SearchUsersDTO) {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        imagePath: true,
      },
      where: {
        name: {
          contains: name,
        },
      },
    });
    return users;
  }
}
