import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import jwt from "jsonwebtoken";
import { RecoveryUserDTO } from "../../dtos/RecoveryUserDTO";
import { isTokenExpired } from "../../../../utils/verifyExpirationToken";

interface UserProps {
  id?: string;
  name?: string;
  email?: string;
  imagePath?: string;
}

export class RecoveryUseCase {
  async execute({ token }: RecoveryUserDTO): Promise<UserProps> {
    const expired = isTokenExpired(token);

    if (expired) {
      throw new AppError("Token experied");
    }

    const { id }: any = jwt.decode(token);

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      imagePath: user?.imagePath,
    };
  }
}
