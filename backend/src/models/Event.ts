import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export default class Event {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  value: string;

  @Column({ default: 0 })
  likes_amount: number;

  @Column()
  banner: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ default: true })
  active: boolean;
}
