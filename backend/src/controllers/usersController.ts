import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

import User from '../models/User';
import userView from '../views/userView';

export default {
  async index(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return res.json(userView.renderMany(users));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);

    return res.json(userView.render(user));
  },

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userRepository = getRepository(User);

    const userAlreadyExists = Boolean(
      await userRepository.findOne({
        where: { email },
      })
    );

    if (userAlreadyExists) {
      return res
        .status(409)
        .json({ message: 'User with the provided email already exists' });
    }

    const password_hash = await bcrypt.hash(password, 12);

    const schemaData = {
      name,
      email,
      password,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(8),
    });

    await schema.validate(schemaData, {
      abortEarly: false,
    });

    const data = {
      name,
      email,
      password_hash,
    };

    const user = userRepository.create(data);

    await userRepository.save(user);

    return res.status(201).json(user);
  },
};
