import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json({
      usuarios,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }
};

export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "Post Usuario",
    body,
  });
};

export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "Put Usuario",
    id,
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "Delete Usuario",
    id,
  });
};
