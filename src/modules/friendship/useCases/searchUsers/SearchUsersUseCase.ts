import { prisma } from "../../../../prisma/client";
import { SearchUsersDTO } from "../../dtos/SearchUsersDTO";

export class SearchUsersUseCase {
  async execute({ name }: SearchUsersDTO) {
    
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    return users;
  }
}
