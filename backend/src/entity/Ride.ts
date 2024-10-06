import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Booking } from './Booking';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pickupLocation: string;

  @Column()
  dropoffLocation: string;

  @Column()
  fare: number;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.rides)
  user: User;

  @OneToMany(() => Booking, (booking) => booking.ride)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    id: number,
    pickupLocation: string,
    dropoffLocation: string,
    fare: number,
    status: string,
    user: User,
  ) {
    this.id = id;
    this.pickupLocation = pickupLocation;
    this.dropoffLocation = dropoffLocation;
    this.fare = fare;
    this.status = status;
    this.user = user;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.bookings = [];
  }
}
