import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Event from '../models/Event';

export default {
  async index(req: Request, res: Response) {
    const eventRepository = getRepository(Event);

    const events = await eventRepository.find();

    return res.json(events);
  },

  async create(req: Request, res: Response) {
    const {
      name,
      description,
      address,
      date,
      time,
      value,
      banner,
      latitude,
      longitude,
    } = req.body;

    const eventRepository = getRepository(Event);

    const event = eventRepository.create({
      name,
      description,
      address,
      date,
      time,
      value,
      banner,
      latitude,
      longitude,
    });

    await eventRepository.save(event);

    return res.status(201).json(event);
  },
};
