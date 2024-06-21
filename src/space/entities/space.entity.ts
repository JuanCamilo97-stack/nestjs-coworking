import { Booking } from "src/booking/entities/booking.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from './../../rooms/entities/room.entity';

@Entity({schema: 'coworking', name: "spaces"})
export class Space {
    @PrimaryGeneratedColumn()
    id_space: number;

    @Column()
    row: number;

    @Column()
    column: number;

    @ManyToOne(() => Room, room => room.spaces)
    @JoinColumn({ name: 'id_sala' })
    sala: Room;

    @OneToMany(() => Booking, booking => booking.space)
    bookings: Booking[];
}
