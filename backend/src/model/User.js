import { prisma } from "../../config/prisma.js"

export const createUser = async (data) => {
    return await prisma.signup.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        adm: data.adm,
      },
    });
  };

export const findUserByEmail = async (email) => {
    return await prisma.signup.findUnique({
      where: {
        email: email,
      },
    });
};