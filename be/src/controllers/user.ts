import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const response = await prisma.user.create({
      data: { email: email, name: username, password: hashedPassword },
    });
    return res
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const findUsers = async (_: never, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, name, password },
    });
    return res
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
