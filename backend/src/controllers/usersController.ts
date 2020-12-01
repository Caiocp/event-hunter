import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../models/User';
import userView from '../views/userView';

export default {
  async index(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return res.json(userView.renderMany(users));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);

    return response.json(userView.render(user));
  },

  async create(req: Request, res: Response) {
    const { name, email, password: password_hash } = req.body;

    const userRepository = getRepository(User);

    const data = {
      name,
      email,
      password_hash,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      password_hash: Yup.string().required().min(8),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = userRepository.create(data);

    await userRepository.save(user);

    return res.status(201).json(user);
  },
};
