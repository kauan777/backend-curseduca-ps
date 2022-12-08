import { User } from "@prisma/client";
import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import bcrypt from "bcrypt";

import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
    imagePath,
  }: CreateUserDTO): Promise<User> {
    
    //Verificar se usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    //Criptografia da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        imagePath,
      },
    });
    return user;
  }
}
