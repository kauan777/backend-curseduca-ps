import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthUserDTO } from "../../dtos/AuthUserDTO";

interface UserProps {
  name: string;
  email: string;
  imagePath: string;
  token: string;
}

export class LoginUseCase {
  async execute({ email, password }: AuthUserDTO): Promise<UserProps> {
    //Verificar se usuário já existe
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("Some information is incorrect");
    }

    // Verifica se a senha criptograda é igual a que o usuário digitou
    const passwordMath: boolean = await bcrypt.compare(password, user.password);

    if (!passwordMath) {
      throw new AppError("Some information is incorrect");
    }

    const token = jwt.sign({ id: user.id }, `${process.env.JWT_KEY}`, {
      expiresIn: "1H",
    });

    return {
      name: user.name,
      email: user.email,
      imagePath: user.imagePath,
      token,
    };
  }
}
