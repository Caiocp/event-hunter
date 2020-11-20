import Event from '../models/Event';

export default {
  render(event: Event) {
    return {
      name: event.name,
      description: event.description,
      address: event.address,
      date: event.date,
      time: event.time,
      value: event.value,
      banner: `http://localhost:3333/uploads/${event.banner}`,
      latitude: event.latitude,
      longitude: event.longitude,
      id: event.id,
      likes_amount: event.id,
      active: event.active,
    };
  },

  renderMany(events: Event[]) {
    return events.map((event) => this.render(event));
  },
};
