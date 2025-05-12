import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, userName, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const response = await prisma.user.create({
      data: { email: email, name: userName, password: hashedPassword },
    });
    return res
      .status(200)
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .status(500)
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
      .status(200)
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .status(500)
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
      .status(200)
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .status(500)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res
      .status(200)
      .send({
        success: true,
        message: response,
      })
      .end();
  } catch (error) {
    return res
      .status(500)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
