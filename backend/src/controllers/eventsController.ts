import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Event from '../models/Event';
import eventView from '../views/eventView';

export default {
  async index(req: Request, res: Response) {
    const eventRepository = getRepository(Event);

    const events = await eventRepository.find();
    console.log(events);

    return res.json(eventView.renderMany(events));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const eventsRepository = getRepository(Event);

    const event = await eventsRepository.findOneOrFail(id);

    return response.json(eventView.render(event));
  },

  async create(req: Request, res: Response) {
    const {
      name,
      description,
      address,
      date,
      time,
      value,
      latitude,
      longitude,
    } = req.body;

    const { filename } = req.file;

    const eventRepository = getRepository(Event);

    const data = {
      name,
      description,
      address,
      date,
      time,
      value,
      banner: filename,
      latitude,
      longitude,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      address: Yup.string().required(),
      date: Yup.string().required(),
      time: Yup.string().required(),
      value: Yup.string().required(),
      banner: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const event = eventRepository.create(data);

    await eventRepository.save(event);

    return res.status(201).json(event);
  },
};
